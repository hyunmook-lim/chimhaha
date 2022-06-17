package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Comment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class CommentRepositoryImpl implements CommentRepository{
    private final EntityManager em;

    @Override
    public void save(Comment comment) {
        em.persist(comment);
    }

    @Override
    public Comment findById(Long commentId) {
        return em.find(Comment.class, commentId);
    }

}
