package chimhaha.moooky.service;

import chimhaha.moooky.domain.Photo;
import chimhaha.moooky.repository.PhotoRepositoryImpl;
import chimhaha.moooky.service.interfaces.PhotoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PhotoServiceImpl implements PhotoService {
    private final PhotoRepositoryImpl photoRepository;

    @Override
    public void savePhoto(Photo photo) {
        photoRepository.save(photo);
    }

    @Override
    public Photo findByPhotoId(Long photoId) {
        Photo findPhoto = photoRepository.findById(photoId);
        return findPhoto;
    }

    @Override
    public void deletePhoto(Photo photo) {
        photoRepository.delete(photo);
    }
}
