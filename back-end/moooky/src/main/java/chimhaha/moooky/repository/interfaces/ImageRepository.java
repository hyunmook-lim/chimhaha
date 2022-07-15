package chimhaha.moooky.repository.interfaces;


import chimhaha.moooky.domain.Image;
import org.springframework.web.multipart.MultipartFile;

public interface ImageRepository {
    void save(Image image);

    Image findById(Long imageId);

    void delete(Image image);

    void fileSave(MultipartFile file);
}
