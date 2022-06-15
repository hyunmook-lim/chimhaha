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

    private String nickname;

    private String password;

    private String email;

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Comment> comments = new ArrayList<>();

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "PROFILE_ID")
    private Profile profile;

    private Date birthday;

    @Enumerated(value = EnumType.STRING)
    private Gender gender;

    //== 연관 관계 메서드 ==//
    /**
     * 게시글 추가
     */
//    public void addBoard(Board board) {
//        boards.add(board);
//        board.
//    }

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
        member.birthday = birthday;
        member.gender = gender;

        member.boards = new ArrayList<>();
        member.comments = new ArrayList<>();

        return member;
    }


}
