package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Comment;

public interface CommentService {
    void saveComment(Comment comment);

    Comment findByCommentId(Long commentId);

    void deleteComment(Comment comment);
}
