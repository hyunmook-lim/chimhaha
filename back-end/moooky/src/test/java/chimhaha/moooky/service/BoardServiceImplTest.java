package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.enums.Gender;
import chimhaha.moooky.enums.Grade;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.repository.MemberRepositoryImpl;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class BoardServiceImplTest {

    @Autowired
    MemberRepositoryImpl memberRepository;
    @Autowired
    BoardRepositoryImpl boardRepository;
    @Autowired
    BoardServiceImpl boardService;

    @Test
    @Rollback(value = false)
    public void 게시글검색() {
        //given
        Member mook = Member.createMember("mook2", "1234", "dfjief@naverlcmo", null, null, Gender.FEMALE);
        memberRepository.save(mook);

        for(int i = 0; i < 1; i++) {
            Board board = Board.createBoard(mook, i + "First", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.FIRST);
        }
        for(int i = 0; i < 2; i++) {
            Board board = Board.createBoard(mook, i + "Second", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.SECOND);
        }
        for(int i = 0; i < 3; i++) {
            Board board = Board.createBoard(mook, i + "THIRD", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.THIRD);
        }
        for(int i = 0; i < 4; i++) {
            Board board = Board.createBoard(mook, i + "Forth", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.FORTH);
        }
        for(int i = 0; i < 5; i++) {
            Board board = Board.createBoard(mook, i + "Fifth", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.FIFTH);
        }
        for(int i = 0; i < 6; i++) {
            Board board = Board.createBoard(mook, i + "Sixth", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.SIXTH);
        }
        for(int i = 0; i < 7; i++) {
            Board board = Board.createBoard(mook, i + "Seventh", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.SEVENTH);
        }
        for(int i = 0; i < 8; i++) {
            Board board = Board.createBoard(mook, i + "eighth", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.EIGHTH);
        }
        for(int i = 0; i < 9; i++) {
            Board board = Board.createBoard(mook, i + "ninth", "content");
            boardRepository.save(board);

            boardService.changeGrade(board.getId(), Grade.NINTH);
        }
        //when

        List<Board> boardsFirst = boardService.GradeBoards(Grade.FIRST);
        List<Board> boardsSecond = boardService.GradeBoards(Grade.SECOND);
        List<Board> boardsThird = boardService.GradeBoards(Grade.THIRD);
        List<Board> boardsForth = boardService.GradeBoards(Grade.FORTH);
        List<Board> boardsFifth = boardService.GradeBoards(Grade.FIFTH);
        List<Board> boardsSixth = boardService.GradeBoards(Grade.SIXTH);
        List<Board> boardsSeventh = boardService.GradeBoards(Grade.SEVENTH);
        List<Board> boardsEighth = boardService.GradeBoards(Grade.EIGHTH);
        List<Board> boardsNinth = boardService.GradeBoards(Grade.NINTH);

        //then
        System.out.println("boardsFirst = " + boardsFirst);
        System.out.println("-------------------------------");
        System.out.println("boardsSecond = " + boardsSecond);
        System.out.println("-------------------------------");
        System.out.println("boardsThird = " + boardsThird);
        System.out.println("-------------------------------");
        System.out.println("boardsForth = " + boardsForth);
        System.out.println("-------------------------------");
        System.out.println("boardsFifth = " + boardsFifth);
        System.out.println("-------------------------------");
        System.out.println("boardsSixth = " + boardsSixth);
        System.out.println("-------------------------------");
        System.out.println("boardsSeventh = " + boardsSeventh);
        System.out.println("-------------------------------");
        System.out.println("boardsEighth = " + boardsEighth);
        System.out.println("-------------------------------");
        System.out.println("boardsNinth = " + boardsNinth);

        Assertions.assertThat(boardsFirst.size()).isEqualTo(1);
        Assertions.assertThat(boardsSecond.size()).isEqualTo(2);
        Assertions.assertThat(boardsThird.size()).isEqualTo(3);
        Assertions.assertThat(boardsForth.size()).isEqualTo(4);
        Assertions.assertThat(boardsFifth.size()).isEqualTo(5);
        Assertions.assertThat(boardsSixth.size()).isEqualTo(6);
        Assertions.assertThat(boardsSeventh.size()).isEqualTo(7);
        Assertions.assertThat(boardsEighth.size()).isEqualTo(8);
        Assertions.assertThat(boardsNinth.size()).isEqualTo(9);


    }
}