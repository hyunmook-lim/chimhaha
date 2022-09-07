package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Authority;
import chimhaha.moooky.enums.Gender;
import chimhaha.moooky.service.MemberServiceImpl;
import chimhaha.moooky.service.ProfileServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.io.IOException;
import java.time.LocalDate;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberServiceImpl memberService;
    private final ProfileServiceImpl profileService;
    private final FileSave fileSave;


    /**
     * 회원 가입
     */
    @PostMapping("api/members")
    public CreateMemberResponse joinMember(CreateMemberRequest createMemberRequest) throws IOException {

        Profile profile = fileSave.saveProfile(createMemberRequest.getProfile());

        Member member = Member.createMember(createMemberRequest.getNickname(),
                createMemberRequest.getPassword(),
                createMemberRequest.getEmail(),
                profile,
                createMemberRequest.getBirthday(),
                createMemberRequest.getGender());

        profile.setMember(member);

        memberService.signIn(member);
        profileService.saveProfile(profile);

        log.info("member ={}", member);
        log.info("profile = {}", profile);

        return new CreateMemberResponse(member.getId(), member.getNickname(), member.getAuthority());
    }

    /**
     * 로그인
     */
    @PostMapping("api/members/login")
    public CreateMemberResponse logInMember(@RequestBody LoginMemberRequest request, BindingResult bindingResult) {
        log.warn("here");
        Member loginMember = memberService.loginMember(request.getEmail(), request.getPassword());
        log.info("loginMember", loginMember);

        if (loginMember == null) {
            bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");
            log.warn("로그인 정보 불일치");
        }
        // 로그인 성공 반환

        return new CreateMemberResponse(loginMember.getId(), loginMember.getNickname(), loginMember.getAuthority());
    }


    /**
     * 회원 조회
     */
    // profile download에 관한 설정이 필요함

    @GetMapping("api/members/{id}")
    public FindMemberResponse findMember(@PathVariable("id") Long id) {
        Member findMember = memberService.findMemberById(id);


        return new FindMemberResponse(
                findMember.getId(),
                findMember.getNickname(),
                findMember.getEmail(),
                findMember.getProfile(),
                null,
                null,
                findMember.getAuthority());
    }

    /**
     * 회원 수정
     */
    @PatchMapping("api/members/{id}")
    public void updateMember(@PathVariable("id") Long id, @RequestBody @Valid UpdateMemberRequest request) {
        Member findMember = memberService.findMemberById(id);

        findMember.changeMemberData(request.getPassword(), request.getProfile(), request.getBirthday(), request.getGender());
    }

    /**
     * 회원 삭제
     */
    // foreign key에 대한 설정이 필요함(삭제시 게시글도 삭제)
    @DeleteMapping("api/members/{id}")
    public void deleteMember(@PathVariable("id") Long id) {
        Member findMember = memberService.findMemberById(id);

        memberService.deleteMember(findMember);
    }

    /**
     * DTO
     */

    @Data
    static class CreateMemberRequest {
        @NotEmpty
        private String nickname;

        @NotEmpty
        private String password;

        @NotEmpty
        private String email;

        private LocalDate birthday;

        private Gender gender;

        private MultipartFile profile;
    }

    @Data
    static class CreateMemberResponse {
        private Long id;

        private String nickname;

        private Authority authority;

        public CreateMemberResponse(Long id, String nickname, Authority authority) {
            this.id = id;
            this.nickname = nickname;
            this.authority = authority;
        }
    }

    @Data
    static class FindMemberResponse {
        private Long id;

        private String nickname;

        private String email;

        private Profile profile;

        private LocalDate birthday;

        private Gender gender;

        private Authority authority;

        public FindMemberResponse(Long id, String nickname, String email, Profile profile, LocalDate birthday, Gender gender, Authority authority) {
            this.id = id;
            this.nickname = nickname;
            this.email = email;
            this.profile = profile;
            this.birthday = birthday;
            this.gender = gender;
            this.authority = authority;
        }
    }

    @Data
    static class UpdateMemberRequest {
        private String password;

        private Profile profile;

        private LocalDate birthday;

        private Gender gender;
    }

    @Data
    static class LoginMemberRequest {
        private String email;

        private String password;
    }
}
