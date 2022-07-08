package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Photo;
import chimhaha.moooky.repository.interfaces.PhotoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class PhotoRepositoryImpl implements PhotoRepository {

    private final EntityManager em;

    @Override
    public void save(Photo photo) {
        em.persist(photo);
    }

    @Override
    public Photo findById(Long photoId) {
        return em.find(Photo.class, photoId);
    }

    @Override
    public void delete(Photo photo) {
        em.remove(photo);
    }

}
