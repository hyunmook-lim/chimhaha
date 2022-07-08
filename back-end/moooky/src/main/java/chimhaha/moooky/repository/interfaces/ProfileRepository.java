package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.Profile;

public interface ProfileRepository {
    void save(Profile profile);

    Profile findById(Long profileId);

    void delete(Profile profile);
}
