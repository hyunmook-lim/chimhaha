package chimhaha.moooky.repository;


import chimhaha.moooky.domain.Photo;

public interface PhotoRepository {
    void save(Photo photo);

    Photo findById(Long photoId);
}
