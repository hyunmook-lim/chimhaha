package chimhaha.moooky.domain;

import chimhaha.moooky.enums.Gender;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
public class Member {

    @Id @GeneratedValue
    @Column(name = "MEMBER_ID")
    private Long id;

    @Column(unique = true)
    private String nickname;

    private String password;

    @Column(unique = true)
    private String email;

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    //좋아요 표시한 게시글들의 id
    private List<Long> likeBoardIds = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Comment> comments = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "PROFILE_ID")
    private Profile profile;

    private Date birthday;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    //== 연관관계 메서드 ==//

    //== 생성 메서드 ==//
    /**
     * 생성
     */

    public static Member createMember(String nickname, String password, String email, Profile profile, Date birthday, Gender gender) {
        Member member = new Member();

        member.nickname = nickname;
        member.password = password;
        member.email = email;
        member.profile = profile;
        //생일 날짜 받아오기
        member.birthday = birthday;
        member.gender = gender;

        member.boards = new ArrayList<>();
        member.comments = new ArrayList<>();

        return member;
    }

    /**
     * 객체 값 변경
     */
    public Long changeMemberData(String password, Profile profile, Date birthday, Gender gender) {
        this.password = password;
        this.profile = profile;
        this.birthday = birthday;
        this.gender = gender;

        return this.id;
    }

    //== 비즈니스 메서드 ==//
    /**
     * 게시글 수 종합
     */

    public int totalBoards() {
        return this.boards.size();
    }
    /**
     * 댓글 수 종합
     */

    public int totalComments() {
        return this.comments.size();
    }
}
