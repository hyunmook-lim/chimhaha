package chimhaha.moooky.service.interfaces;


import chimhaha.moooky.domain.Profile;

public interface ProfileService {
    void saveProfile(Profile profile);

    Profile findByProfileId(Long profileId);

    void deleteProfile(Profile profile);

}
