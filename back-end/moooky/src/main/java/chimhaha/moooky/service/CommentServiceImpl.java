package chimhaha.moooky.service;

import chimhaha.moooky.domain.Comment;
import chimhaha.moooky.repository.CommentRepositoryImpl;
import chimhaha.moooky.service.interfaces.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepositoryImpl commentRepository;

    @Override
    public void saveComment(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public Comment findByCommentId(Long commentId) {
        Comment findComment = commentRepository.findById(commentId);
        return findComment;
    }

    @Override
    public void deleteComment(Comment comment) {
        commentRepository.delete(comment);
    }
}
