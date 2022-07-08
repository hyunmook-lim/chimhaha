package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.repository.MemberRepositoryImpl;
import chimhaha.moooky.service.interfaces.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepositoryImpl memberRepository;
    private final BoardRepositoryImpl boardRepository;

    @Override
    @Transactional
    public void signIn(Member member) {

        validateDuplicateMember(member);
        memberRepository.save(member);
    }

    @Override
    public Member findMemberById(Long memberId) {
        return memberRepository.findById(memberId);
    }

    private void validateDuplicateMember(Member member) {
        /*
        조회하는 과정에서 최적화 필요
        이메일과 닉네임의 중복 검사기 필요할 때
        1. 이메일로 한번, 닉네임으로 한번 두번 조회하는 경우
        2. 모든 멤버 객체를 가져와서 비교하는 경우
         */
        List<Member> findSameEmailMember = (List<Member>) memberRepository.findByEmail(member.getEmail());
        List<Member> findSameNicknameMember = (List<Member>) memberRepository.findByNickname(member.getNickname());
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
