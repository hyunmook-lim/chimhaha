package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.repository.LikeBoardsRepositoryImpl;
import chimhaha.moooky.repository.MemberRepositoryImpl;
import chimhaha.moooky.service.interfaces.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
    private final MemberRepositoryImpl memberRepository;
    private final BoardRepositoryImpl boardRepository;
    private final LikeBoardsRepositoryImpl likeBoardsRepository;

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
    public void clickLikeOnBoard(Long memberId, Long boardId) {
        Member findMember = memberRepository.findById(memberId);
        Board findBoard = boardRepository.findById(boardId);
        List<LikeBoards> findLikeBoards = likeBoardsRepository.findByMemberAndBoard(memberId, boardId);

        if (findLikeBoards.isEmpty()) {
            findBoard.addLikes();
            LikeBoards newLikeBoards = LikeBoards.createLikeBoards(findMember, findBoard);
            likeBoardsRepository.save(newLikeBoards);
        } else {
            findBoard.cancelLikes();
            likeBoardsRepository.delete(findLikeBoards.get(0));
        }


    }
}
