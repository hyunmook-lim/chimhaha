package chimhaha.moooky.service;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Comment;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.repository.CommentRepositoryImpl;
import chimhaha.moooky.repository.MemberRepositoryImpl;
import chimhaha.moooky.service.interfaces.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    private final CommentRepositoryImpl commentRepository;
    private final MemberRepositoryImpl memberRepository;
    private final BoardRepositoryImpl boardRepository;


    @Override
    @Transactional
    public Long saveComment(Long memberId, Long boardId, String content) {

        Member findMember = memberRepository.findById(memberId);
        Board findBoard = boardRepository.findById(boardId);

        Comment comment = Comment.createComment(findMember, findBoard, content);
        commentRepository.save(comment);

        return comment.getId();
    }

    @Override
    public Comment findByCommentId(Long commentId) {
        Comment findComment = commentRepository.findById(commentId);
        return findComment;
    }

    @Override
    @Transactional
    public void deleteComment(Comment comment) {
        commentRepository.delete(comment);
    }
}
