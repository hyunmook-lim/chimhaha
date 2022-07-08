package chimhaha.moooky.repository.interfaces;


import chimhaha.moooky.domain.Photo;

public interface PhotoRepository {
    void save(Photo photo);

    Photo findById(Long photoId);

    void delete(Photo photo);
}
