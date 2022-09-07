package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Member;

public interface MemberService {
    Long signIn(Member member);

    Member findMemberById(Long memberId);

    void deleteMember(Member member);

    Member loginMember(String email, String password);
    // 게시글에 좋아요를 누르거나 취소하는 메서드
}
