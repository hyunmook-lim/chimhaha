package chimhaha.moooky.domain;

import lombok.Getter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
@Getter
public class Image {

    @Id
    @GeneratedValue
    @Column(name = "PHOTO_ID")
    private Long id;

    @Column
    private String imageName;

    @Column
    private String filePath;

    @Column
    private String contentType;

    private long imageSize;

    private LocalDateTime postedDate;

    //== 연관관계 메서드 ==//

    //== 생성 메서드 ==//
    /**
     * 생성
     */
    public static Image createImage(String imageName, String filePath, String contentType, long imageSize){
        Image image = new Image();

        image.imageName = imageName;
        image.filePath = filePath;
        image.contentType = contentType;
        image.imageSize = imageSize;

        image.postedDate = LocalDateTime.now();

        return image;
    }

}
