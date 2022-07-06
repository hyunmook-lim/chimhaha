package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.enums.Grade;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.service.interfaces.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
    public void findOneBoard(Long boardId) {
        boardRepository.findById(boardId);
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
