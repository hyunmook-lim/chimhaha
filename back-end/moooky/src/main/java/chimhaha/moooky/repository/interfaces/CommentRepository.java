package chimhaha.moooky.repository.interfaces;


import chimhaha.moooky.domain.Comment;

public interface CommentRepository {
    void save(Comment comment);

    Comment findById(Long commentId);

    void delete(Comment comment);
}
