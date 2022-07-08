package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.repository.interfaces.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class ProfileRepositoryImpl implements ProfileRepository {

    private final EntityManager em;

    @Override
    public void save(Profile profile) {
        em.persist(profile);
    }

    @Override
    public Profile findById(Long profileId) {
        return em.find(Profile.class, profileId);
    }

    @Override
    public void delete(Profile profile) {
        em.remove(profile);
    }
}
