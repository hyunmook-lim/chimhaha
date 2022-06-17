package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class ProfileRepositoryImpl implements ProfileRepository{

    private final EntityManager em;

    @Override
    public void save(Profile profile) {
        em.persist(profile);
    }

    @Override
    public Profile findById(Long profileId) {
        return em.find(Profile.class, profileId);
    }
}
