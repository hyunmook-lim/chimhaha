package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.service.BoardServiceImpl;
import chimhaha.moooky.service.LikeBoardsServiceImpl;
import chimhaha.moooky.service.MemberServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.NotEmpty;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@RequiredArgsConstructor
public class likeBoardsApiController {
    private final LikeBoardsServiceImpl likeBoardsService;
    private final BoardServiceImpl boardService;
    private final MemberServiceImpl memberService;

    @PostMapping("api/likeBoards")
    public void clickLikeButton(@RequestBody likeBoardsRequest request) {
        log.info("here is clickLikeButton");
        Long memberId = request.getMemberId();
        Long boardId = request.getBoardId();
        log.info("boardId = {}", boardId);
        Board findBoard = boardService.findOneBoard(boardId);
        log.info("controller board = {}", findBoard);

        List<LikeBoards> likeBoardsOfMember = likeBoardsService.findLikeBoards(memberId);

        Optional<LikeBoards> likeBoards = likeBoardsOfMember.stream().filter(b -> b.getBoard().equals(findBoard)).findFirst();
        if (likeBoards.isEmpty()) {
            findBoard.addLikes();
            Member findMember = memberService.findMemberById(memberId);
            LikeBoards newLikeBoards = LikeBoards.createLikeBoards(findMember, findBoard);
            likeBoardsService.saveLikeBoards(newLikeBoards);
        } else {
            findBoard.cancelLikes();
            likeBoardsService.deleteLikeBoards(likeBoards.get());
        }
    }

    @Data
    static class likeBoardsRequest {
        @NotEmpty
        private Long memberId;

        private Long boardId;
    }
}
