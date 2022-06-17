package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Gender;
import org.hibernate.exception.ConstraintViolationException;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.Date;

import static org.assertj.core.api.Assertions.*;

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

    @Test
    @Rollback(value = false)
    public void 중복회원오류() {
        //given
        Member member1 = Member.createMember("mook", "1234", "fielf@anve.com", new Profile(), new Date(), Gender.FEMALE);
        Member member2 = Member.createMember("mook", "1234", "fielf@anve.com", new Profile(), new Date(), Gender.FEMALE);
        //when
        System.out.println("-------------------------");
        memberRepository.save(member1);
        memberRepository.save(member2);
        System.out.println("-------------------------");

        //then
    }
}