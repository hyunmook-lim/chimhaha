package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;

import java.util.List;

public interface BoardRepository {
    void save(Board board);

    Board findById(Long boardId);
    //검색어를 통한 쿼리 검색

    //단수를 통한 쿼리 검색
    List<Board> findByGrade(Grade grade);

    // 작성자 검색을 통한 쿼리 검색

    void delete(Board board);
}

