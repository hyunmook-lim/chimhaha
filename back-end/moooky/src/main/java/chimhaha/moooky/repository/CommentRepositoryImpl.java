package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Comment;
import chimhaha.moooky.repository.interfaces.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class CommentRepositoryImpl implements CommentRepository {
    private final EntityManager em;

    @Override
    @Transactional
    public void save(Comment comment) {
        em.persist(comment);
    }

    @Override
    public Comment findById(Long commentId) {
        return em.find(Comment.class, commentId);
    }

    @Override
    @Transactional
    public void delete(Comment comment) {
        em.remove(comment);
    }
}
