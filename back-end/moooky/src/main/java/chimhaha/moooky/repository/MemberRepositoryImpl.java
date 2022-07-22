package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.interfaces.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MemberRepositoryImpl implements MemberRepository {

    private final EntityManager em;

    @Override
    @Transactional
    public void save(Member member) {
        em.persist(member);
    }

    @Override
    public Member findById(Long memberId) {
        return em.find(Member.class, memberId);
    }

    @Override
    public List<Member> findAll() {

        return em.createQuery("select m from Member m", Member.class).getResultList();
    }

    @Override
    public List<Member> findByEmail(String email) {
        String query = "select m from Member m where m.email=:email";

        List<Member> sameEmail = em.createQuery(query).setParameter("email", email).getResultList();

        return sameEmail;
    }

    @Override
    public List<Member> findByNickname(String nickname) {
        String query = "select m from Member m where m.nickname=:nickname";
        List<Member> sameNickname = em.createQuery(query).setParameter("nickname", nickname).getResultList();
        return sameNickname;
    }

    @Override
    public void delete(Member member) {
        em.remove(member);
    }
}
