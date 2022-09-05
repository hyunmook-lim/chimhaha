package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Profile;
import chimhaha.moooky.repository.interfaces.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProfileRepositoryImpl implements ProfileRepository {

    private final EntityManager em;

    @Override
    @Transactional
    public void save(Profile profile) {
        em.persist(profile);
    }

    @Override
    public Profile findById(Long profileId) {
        return em.find(Profile.class, profileId);
    }

    @Override
    @Transactional
    public void delete(Profile profile) {
        em.remove(profile);
    }
}
