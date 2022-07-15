package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Image;
import chimhaha.moooky.repository.interfaces.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class ImageRepositoryImpl implements ImageRepository {

    private final EntityManager em;

    @Override
    public void save(Image image) {
        em.persist(image);
    }

    @Override
    public Image findById(Long imageId) {
        return em.find(Image.class, imageId);
    }

    @Override
    public void delete(Image image) {
        em.remove(image);
    }

    @Override
    public void fileSave(MultipartFile file) {
    }

}
