package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;

public interface BoardService {

    void saveBoard(Board board);

    Board findOneBoard(Long boardId);

    void changeGrade(Long boardId, Grade grade);

    void deleteBoard(Board board);
}
