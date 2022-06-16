package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Member;

public interface MemberRepository {
    void save(Member member);

    Member findById(Long memberId);
}

