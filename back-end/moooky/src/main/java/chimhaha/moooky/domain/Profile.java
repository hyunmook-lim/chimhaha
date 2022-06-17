package chimhaha.moooky.domain;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Profile {

    @Id @GeneratedValue
    @Column(name = "PROFILE_ID")
    private Long id;

    @OneToOne(mappedBy = "profile", fetch = FetchType.LAZY)
    private Member member;

    private String photoPath;

    //== 연관 관계 메서드 ==//
    public void setMember(Member member) {
        this.member = member;
    }

    //== 생성 메서드 ==//
    /**
     * 생성
     */
    public static Profile createProfile(Member member, String photoPath) {
        Profile profile = new Profile();

        profile.member = member;
        profile.photoPath = photoPath;

        return profile;
    }

    /**
     * 변경
     */
    public Long changeProfile(String photoPath) {
        this.photoPath = photoPath;
        return this.id;
    }
}

