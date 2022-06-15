package chimhaha.moooky.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Photo {

    @Id @GeneratedValue
    @Column(name = "PHOTO_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    private String photoPath;
}
