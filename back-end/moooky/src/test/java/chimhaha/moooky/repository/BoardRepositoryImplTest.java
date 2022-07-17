package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Gender;
import org.assertj.core.api.Assertions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class BoardRepositoryImplTest {

    @Autowired BoardRepositoryImpl boardRepository;
    @Autowired MemberRepositoryImpl memberRepository;

    @Test
    @Rollback(value = false)
    public void 게시글저장() {
        //given
        String title = "안녕하세요";
        String content = "test";

        Member member = Member.createMember("mook", "1234", "hmli@naver.com", new Profile(), LocalDate.of(1995, 3, 20), Gender.FEMALE);

        Board board = Board.createBoard(member, title, content);
        //when
        boardRepository.save(board);
        memberRepository.save(member);


        Board findBoard = boardRepository.findById(board.getId());
        //then
        Assertions.assertThat(findBoard).isSameAs(board);

        System.out.println("findBoard = " + findBoard);
        System.out.println("board = " + board);
    }

}