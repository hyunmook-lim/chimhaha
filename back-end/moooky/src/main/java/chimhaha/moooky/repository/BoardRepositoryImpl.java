package chimhaha.moooky.repository;


import chimhaha.moooky.domain.Board;
import chimhaha.moooky.repository.interfaces.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class BoardRepositoryImpl implements BoardRepository {

    private final EntityManager em;

    @Override
    public void save(Board board) {
        em.persist(board);
    }

    @Override
    public Board findById(Long boardId) {
        return em.find(Board.class, boardId);
    }

    @Override
    public List<Board> findAll() {
        return em.createQuery("select b from Board b", Board.class)
                .getResultList();
    }

}
