package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Member;

public interface MemberService {
    void signIn(Member member);

    Member findMemberById(Long memberId);

    void deleteMember(Member member);
}
