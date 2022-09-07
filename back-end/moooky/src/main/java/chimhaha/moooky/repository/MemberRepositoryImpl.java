package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.interfaces.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;
import java.util.Optional;

@Slf4j
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
    public Optional<Member> findByEmail(String email) {
        log.info("here is findByEmail");
        log.info("email = {}", email);
        String query = "select m from Member m where m.email=:email";

        List<Member> sameEmailMember = em.createQuery(query).setParameter("email", email).getResultList();
        log.info("sameEmailMember = {}", sameEmailMember);
        return sameEmailMember.stream().findFirst();
    }

    @Override
    public Optional<Member> findByNickname(String nickname) {
        return findAll().stream()
                .filter(m -> m.getNickname().equals(nickname))
                .findFirst();
    }

    @Override
    @Transactional
    public void delete(Member member) {
        em.remove(member);
    }
}
