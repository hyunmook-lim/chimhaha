package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Authority;
import chimhaha.moooky.enums.Gender;
import chimhaha.moooky.service.MemberServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;
import java.time.LocalDate;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberServiceImpl memberService;

    /**
     * 회원 가입
     */
    @PostMapping("api/members")
    public CreateMemberResponse joinMember(@RequestBody @Valid CreateMemberRequest request) {

        Member member = Member.createMember(
                                request.getNickname(),
                                request.getPassword(),
                                request.getEmail(),
                                null,
                                request.getBirthday(),
                                request.getGender());

        memberService.signIn(member);

        return new CreateMemberResponse(member.getId(), member.getNickname(), member.getAuthority());
    }

    /**
     * 회원 조회
     */
    @GetMapping("api/members/{id}")
    public FindMemberResponse findMember(@PathVariable("id") Long id) {
        Member findMember = memberService.findMemberById(id);


        return new FindMemberResponse(
                findMember.getId(),
                findMember.getNickname(),
                findMember.getEmail(),
                findMember.getProfile(),
                findMember.getBirthday(),
                findMember.getGender(),
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

        private String password;

        private String email;

        private Profile profile;

        private LocalDate birthday;

        private Gender gender;
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
    private class UpdateMemberRequest {
        private String password;

        private Profile profile;

        private LocalDate birthday;

        private Gender gender;
    }
}
