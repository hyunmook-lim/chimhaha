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
}
