package chimhaha.moooky.domain;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Profile {

    @Id @GeneratedValue
    @Column(name = "PROFILE_ID")
    private Long id;

    @JsonBackReference
    @OneToOne(mappedBy = "profile", fetch = FetchType.LAZY)
    private Member member;

    private String photoPath;

    private String storeFileName;

    //== 연관 관계 메서드 ==//
    public void setMember(Member member) {
        this.member = member;
    }

    //== 생성 메서드 ==//
    /**
     * 생성
     */
    public static Profile createProfile(String photoPath, String storeFileName) {
        Profile profile = new Profile();

        profile.photoPath = photoPath;
        profile.storeFileName = storeFileName;
        return profile;
    }

    /**
     * 변경
     */
    public Long changeProfile(String photoPath, String storeFileName) {
        this.photoPath = photoPath;
        this.storeFileName = storeFileName;
        return this.id;
    }
}

