package chimhaha.moooky.repository;

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

import java.util.Date;

import static org.assertj.core.api.Assertions.*;
import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberRepositoryImplTest {

    @Autowired MemberRepositoryImpl memberRepository;

    @Test
    @Rollback(value = false)
    public void 회원저장() {

        //given
        Profile profile = new Profile();
        Date date = new Date();
        Member member1 = Member.createMember("hello", "1234", "hmli@naver.com", profile, date, Gender.FEMALE);
        memberRepository.save(member1);
        //when
        Member findMember = memberRepository.findById(1L);
        //then
        assertThat(findMember).isSameAs(member1);
    }
}