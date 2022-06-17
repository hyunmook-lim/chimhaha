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

    //== 연관관계 메서드 ==//
    public void setBoard(Board board) {
        this.board = board;
        board.getPhotos().add(this);
    }

    //== 생성 메서드 ==//
    /**
     * 생성
     */
    public static Photo createPhoto(Board board, String photoPath){
        Photo photo = new Photo();

        photo.board = board;
        photo.photoPath = photoPath;

        return photo;
    }

    /**
     * 변경
     */
    public Long changePhoto(String photoPath) {
        this.photoPath = photoPath;

        return this.id;
    }
}
