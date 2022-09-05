package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.Comment;

public interface CommentService {
    Long saveComment(Long memberId, Long boardId, String content);

    Comment findByCommentId(Long commentId);

    void deleteComment(Comment comment);
}
