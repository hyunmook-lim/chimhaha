package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;

import java.util.List;

public interface BoardService {

    void saveBoard(Board board);

    Board findOneBoard(Long boardId);

    List<Board> GradeBoards(Grade grade);

    void changeGrade(Long boardId, Grade grade);

    void deleteBoard(Board board);
}
