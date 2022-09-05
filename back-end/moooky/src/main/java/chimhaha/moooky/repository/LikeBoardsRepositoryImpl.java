package chimhaha.moooky.repository;

import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.repository.interfaces.LikeBoardsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikeBoardsRepositoryImpl implements LikeBoardsRepository {
    private EntityManager em;

    @Override
    @Transactional
    public void save(LikeBoards likeBoards) {
        em.persist(likeBoards);
    }

    @Override
    public List<LikeBoards> findByMemberAndBoard(Long memberId, Long boardId) {
        String query = "select lb from LikeBoards lb where lb.memberId := memberId and lb.boardId := boardId";

        return em.createQuery(query).setParameter("memberId", memberId).setParameter("boardId", boardId).getResultList();
    }

    @Override
    @Transactional
    public void delete(LikeBoards likeBoards) {
        em.remove(likeBoards);
    }
}
