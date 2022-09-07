package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.service.BoardServiceImpl;
import chimhaha.moooky.service.LikeBoardsServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotEmpty;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
public class likeBoardsApiController {
    private final LikeBoardsServiceImpl likeBoardsService;
    private final BoardServiceImpl boardService;

    @PostMapping("api/likeBoards")
    public void clickLikeButton(@RequestBody likeBoardsRequest request) {
        log.info("here is clickLikeButton");
        Long memberId = request.getMemberId();
        Long boardId = request.getBoardId();
        Board findBoard = boardService.findOneBoard(boardId);

        List<LikeBoards> likeBoards = likeBoardsService.findLikeBoards(memberId, boardId);

        if (likeBoards.isEmpty()) {
            findBoard.addLikes();
            likeBoardsService.saveLikeBoards(likeBoards.get(0));
        } else {
            findBoard.cancelLikes();
            likeBoardsService.deleteLikeBoards(likeBoards.get(0));
        }
    }

    @Data
    static class likeBoardsRequest {
        @NotEmpty
        private Long memberId;

        private Long boardId;
    }
}
