package chimhaha.moooky.repository;

import chimhaha.moooky.domain.Comment;

public interface CommentRepository {
    void save(Comment comment);

    Comment findById(Long commentId);
}
