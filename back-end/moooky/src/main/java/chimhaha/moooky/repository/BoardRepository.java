package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Board;

public interface BoardRepository {
    void save(Board board);

    Board findById(Long boardId);

}
