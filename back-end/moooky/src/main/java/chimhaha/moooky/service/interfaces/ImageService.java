package chimhaha.moooky.service.interfaces;


import chimhaha.moooky.domain.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageService {
    void saveImage(MultipartFile image);

    Image findByImageId(Long imageId);

    void deleteImage(MultipartFile image);
}
