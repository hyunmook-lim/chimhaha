package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.Member;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {
    void save(Member member);

    Member findById(Long memberId);

    List<Member> findAll();

    Optional<Member> findByEmail(String email);

    Optional<Member> findByNickname(String nickname);

    void delete(Member member);
}

