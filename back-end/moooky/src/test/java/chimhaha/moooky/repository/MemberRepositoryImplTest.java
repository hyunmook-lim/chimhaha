package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Gender;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class MemberRepositoryImplTest {

    @Autowired MemberRepositoryImpl memberRepository;

    @Test
    public void 회원저장() {

//        //given
//        LocalDate date = LocalDate.now();
//        Member member1 = Member.createMember("hello", "1234", "hmli@naver.com", null, date, Gender.FEMALE);
//        memberRepository.save(member1);
//        //when
//        Member findMember = memberRepository.findByNickname("hello").get();
//        //then
//        System.out.println("findMember = " + findMember);
//        System.out.println("member1 = " + member1);
//
//        assertThat(findMember).isSameAs(member1);
    }

    @Test
    public void 중복회원검증() {
        //given
        Member member1 = Member.createMember("mook", "1234", "fielf@anve.com", null, LocalDate.now(), Gender.FEMALE);

        Member member2 = Member.createMember("hello", "1234", "dfefsf@anve.com", new Profile(), LocalDate.now(), Gender.FEMALE);
        //when
        System.out.println("-------------------------");
        memberRepository.save(member1);
        memberRepository.save(member2);

        //then
        Optional<Member> sameMember = memberRepository.findByEmail("dfefsf@anve.com");
        assertThat(sameMember).isNotEmpty();

        Optional<Member> sameNicknameMember = memberRepository.findByNickname("mook");
        assertThat(sameNicknameMember).isNotEmpty();
    }
}