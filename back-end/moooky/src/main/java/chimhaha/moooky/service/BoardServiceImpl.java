package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.service.interfaces.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class BoardServiceImpl implements BoardService {
    private final BoardRepositoryImpl boardRepository;

    @Override
    @Transactional
    public void saveBoard(Board board) {
        boardRepository.save(board);
    }

    @Override
    public Board findOneBoard(Long boardId) {
        return boardRepository.findById(boardId);
    }

    @Override
    public List<Board> GradeBoards(Grade grade) {
        List<Board> boards = boardRepository.findByGrade(grade);

        return boards;
    }

    @Override
    @Transactional
    public void changeGrade(Long boardId, Grade grade) {
        Board board = boardRepository.findById(boardId);
        board.changeGrade(grade);
    }

    @Override
    @Transactional
    public void deleteBoard(Board board) {
        boardRepository.delete(board);
    }
}
