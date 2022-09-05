package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Comment;
import chimhaha.moooky.service.CommentServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotEmpty;

@Slf4j
@RestController
@RequiredArgsConstructor
public class CommentApiController {
    private final CommentServiceImpl commentService;

    @PostMapping("api/comment")
    public void saveComment(@RequestBody @Valid saveCommentRequest request) {
        commentService.saveComment(request.getMemberId(), request.getBoardId(), request.getContent());
    }
    @PostMapping("api/comment/{id}")
    public void updateComment(@PathVariable("id") Long commentId, @RequestBody @Valid String content) {
        Comment findComment = commentService.findByCommentId(commentId);
        findComment.changeCommentData(content);
    }

    @DeleteMapping("api/comment/{id}")
    public void deleteComment(@PathVariable("id") Long commentId) {
        Comment findComment = commentService.findByCommentId(commentId);
        commentService.deleteComment(findComment);
    }

    @Data
    private class saveCommentRequest {
        @NotEmpty
        private Long boardId;

        @NotEmpty
        private Long memberId;

        @NotEmpty
        private String content;
    }
}
