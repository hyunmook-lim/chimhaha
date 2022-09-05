package chimhaha.moooky.service;

import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.repository.ProfileRepositoryImpl;
import chimhaha.moooky.service.interfaces.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {
    private final ProfileRepositoryImpl profileRepository;

    @Override
    @Transactional
    public void saveProfile(Profile profile) {
        profileRepository.save(profile);
    }

    @Override
    public Profile findByProfileId(Long profileId) {
        Profile findProfile = profileRepository.findById(profileId);
        return findProfile;
    }

    @Override
    @Transactional
    public void deleteProfile(Profile profile) {
        profileRepository.delete(profile);
    }
}
