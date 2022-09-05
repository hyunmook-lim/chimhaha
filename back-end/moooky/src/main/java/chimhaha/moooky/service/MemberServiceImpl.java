package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.repository.MemberRepositoryImpl;
import chimhaha.moooky.service.interfaces.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepositoryImpl memberRepository;
    private final BoardRepositoryImpl boardRepository;

    @Override
    @Transactional
    public Long signIn(Member member) {
        validateDuplicateMember(member);

        memberRepository.save(member);

        return member.getId();
    }

    @Override
    public Member findMemberById(Long memberId) {
        return memberRepository.findById(memberId);
    }

    private void validateDuplicateMember(Member member) {

        Optional<Member> findSameEmailMember = memberRepository.findByEmail(member.getEmail());

        Optional<Member> findSameNicknameMember = memberRepository.findByNickname(member.getNickname());
        if (!findSameEmailMember.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 이메일입니다.");
        }
        else if (!findSameNicknameMember.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 닉네임입니다.");
        }
    }

    @Override
    @Transactional
    public void deleteMember(Member member) {
        memberRepository.delete(member);
    }

    @Override
    public Member loginMember(String email, String password) {
        return memberRepository.findByEmail(email)
                .filter(m -> m.getPassword().equals(password))
                .orElse(null);
    }



    @Override
    public void chooseLikeOnBoard(Member member, Long boardId) {
        Board findBoard = boardRepository.findById(boardId);
        //이미 좋아요 표시를 한 경우 취소
        if (member.getLikeBoardIds().contains(boardId)) {
            member.getLikeBoardIds().remove(boardId);
            findBoard.cancelLikes();
        } else { // 좋아요 표시를 하지 않은 경우 좋아요
            member.getLikeBoardIds().add(boardId);
            findBoard.addLikes();
        }

    }
}
