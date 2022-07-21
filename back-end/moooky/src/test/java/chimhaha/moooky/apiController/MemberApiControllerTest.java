package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.enums.Gender;
import chimhaha.moooky.service.MemberServiceImpl;
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
public class MemberApiControllerTest {

    @Autowired MemberServiceImpl memberService;

    @Test
    @Rollback(value = false)
    public void join() {
        Member member = Member.createMember("adbd", "eiflef", "eifle@naver.com", null, LocalDate.of(1995, 03, 20), Gender.FEMALE);
        System.out.println("memberId = " + member.getId());
        memberService.signIn(member);

    }
}