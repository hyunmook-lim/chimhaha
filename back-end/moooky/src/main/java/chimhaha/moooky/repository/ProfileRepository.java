package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Profile;

public interface ProfileRepository {
    void save(Profile profile);

    Profile findById(Long profileId);
}
