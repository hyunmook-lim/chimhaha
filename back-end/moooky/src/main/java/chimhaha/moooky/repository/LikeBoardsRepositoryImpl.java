package chimhaha.moooky.repository;

import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.interfaces.LikeBoardsRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Slf4j
@Repository
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikeBoardsRepositoryImpl implements LikeBoardsRepository {
    private final EntityManager em;
    private final MemberRepositoryImpl memberRepository;

    @Override
    @Transactional
    public void save(LikeBoards likeBoards) {
        em.persist(likeBoards);
    }

    @Override
    public List<LikeBoards> findByMember(Long memberId) {
        Member findMember = memberRepository.findById(memberId);
        String query = "select b from LikeBoards b where b.member=:member";

        return em.createQuery(query).setParameter("member", findMember).getResultList();
    }

    @Override
    @Transactional
    public void delete(LikeBoards likeBoards) {
        em.remove(likeBoards);
    }
}
