package chimhaha.moooky.repository;


import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;
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
    public List<Board> findByGrade(Grade grade) {
        String query = "select b from Board b where b.grade=:grade";

        List<Board> boards = em.createQuery(query).setParameter("grade", grade).getResultList();

        return boards;
    }

    @Override
    public void delete(Board board) {
        em.remove(board);
    }

}
