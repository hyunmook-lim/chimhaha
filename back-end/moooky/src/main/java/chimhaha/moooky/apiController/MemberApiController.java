package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Member;
import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Gender;
import chimhaha.moooky.service.MemberServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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

        LocalDate defaultBirthday = LocalDate.of(1900, 1, 1);
        Profile defaultProfile = null;

        Member member = Member.createMember(request.getNickname(), request.getPassword(), request.getEmail(), defaultProfile,
                defaultBirthday, request.getGender());
        memberService.signIn(member);

        return new CreateMemberResponse(member.getId(), member.getNickname());
    }

    /**
     * 회원 조회
     */
    @GetMapping("api/members/{id}")
    public Member findMember(@PathVariable("id") Long id) {
        Member findMember = memberService.findMemberById(id);

        return findMember;
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

        public CreateMemberResponse(Long id, String nickname) {
            this.id = id;
            this.nickname = nickname;
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
