package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.interfaces.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class MemberRepositoryImpl implements MemberRepository {

    private final EntityManager em;

    @Override
    public void save(Member member) {
        em.persist(member);
    }

    @Override
    public Member findById(Long memberId) {
        return em.find(Member.class, memberId);
    }
}
