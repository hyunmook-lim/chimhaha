package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Photo;

public interface PhotoService {
    void savePhoto(Photo photo);

    Photo findByPhotoId(Long photoId);

    void deletePhoto(Photo photo);

}
