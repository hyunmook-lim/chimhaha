package chimhaha.moooky.service;

import chimhaha.moooky.domain.Image;
import chimhaha.moooky.repository.ImageRepositoryImpl;
import chimhaha.moooky.service.interfaces.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {

    private final ImageRepositoryImpl imageRepository;

    private final String rootLocation = "d:/image/"; //image 가 저장될 root 폴더

    @Override
    public void saveImage(MultipartFile file) {

    }

    @Override
    public Image findByImageId(Long imageId) {
        Image findImage = imageRepository.findById(imageId);
        return findImage;
    }

    @Override
    public void deleteImage(MultipartFile image) {
//        imageRepository.delete(image);
    }
}
