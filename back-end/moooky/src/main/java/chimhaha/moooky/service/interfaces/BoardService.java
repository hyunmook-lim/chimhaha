package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Board;

public interface BoardService {

    void saveBoard(Board board);

    void findOneBoard(Long boardId);

}
