package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.enums.Gender;
import chimhaha.moooky.service.MemberServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@RequiredArgsConstructor
public class MemberApiController {

    private final MemberServiceImpl memberService;

    /**
     * 회원 가입
     */
    public


    /**
     * DTO
     */
    static class CreateMemberRequest {
        private String nickname;

        private String password;

        private String email;

        private Profile profile;

        private Date birthday;

        private Gender gender;
    }

}
