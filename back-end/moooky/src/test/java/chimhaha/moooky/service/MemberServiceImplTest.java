package chimhaha.moooky.service;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.enums.Gender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.fail;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberServiceImplTest {

    @Autowired
    MemberServiceImpl memberService;

    @Test(expected = IllegalStateException.class)
    public void 닉네임중복() {
        //given
        Member member1 = Member.createMember("mook", "1234", "hmlim0320@naver.com", null, LocalDate.now(), Gender.FEMALE);
        memberService.signIn(member1);

        Member member2 = Member.createMember("mook", "1234", "3flen@naver,com", null, null, Gender.MALE);
        //when
        memberService.signIn(member2);
        //then
        fail("닉네임이 중복 되면 가입 불가");

    }

    @Test(expected = IllegalStateException.class)
    public void 이메일중복() {
        //given
        Member member1 = Member.createMember("mook", "1234", "hmlim0320@naver.com", null, LocalDate.now(), Gender.FEMALE);
        memberService.signIn(member1);

        Member member2 = Member.createMember("soo", "1234", "hmlim0320@naver.com", null, null, Gender.MALE);
        //when
        memberService.signIn(member2);
        //then
        fail("이메일이 중복 되면 가입 불가");

    }

}