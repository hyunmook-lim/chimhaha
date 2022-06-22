package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.Board;

import java.util.List;

public interface BoardRepository {
    void save(Board board);

    Board findById(Long boardId);

    List<Board> findAll();
    //검색어를 통한 쿼리 검색

}

