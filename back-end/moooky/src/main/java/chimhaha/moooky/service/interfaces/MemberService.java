package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Member;

public interface MemberService {
    void signIn(Member member);

    Member findMemberById(Long memberId);

    void deleteMember(Member member);

    // 게시글에 좋아요를 누르거나 취소하는 메서드

    void chooseLikeOnBoard(Member member, Long boardId);
}
