package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.Member;

import java.util.List;

public interface MemberRepository {
    void save(Member member);

    Member findById(Long memberId);

    List<Member> findAll();

    Member findByEmail(String email);

    Member findByNickname(String nickname);

    void delete(Member member);
}

