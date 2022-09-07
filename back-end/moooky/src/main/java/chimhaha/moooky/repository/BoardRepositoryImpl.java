package chimhaha.moooky.repository;


import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;
import chimhaha.moooky.repository.interfaces.BoardRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;

@Slf4j
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
        log.info("boardId = {}", boardId);
        Board board = em.find(Board.class, boardId);
        log.info("repository board = {}", board);
        return board;
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
