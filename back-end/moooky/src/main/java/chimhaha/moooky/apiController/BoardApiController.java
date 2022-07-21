package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Comment;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.service.BoardServiceImpl;
import chimhaha.moooky.service.MemberServiceImpl;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardApiController {

    private final BoardServiceImpl boardService;
    private final MemberServiceImpl memberService;

    /**
     * 게시글 작성
     */
    @PostMapping("api/boards")
    public CreateBoardResponse makeBoard(@RequestBody @Valid CreateBoardRequest request) {
        Member findMember = memberService.findMemberById(request.getMemberId());

        Board board = Board.createBoard(findMember, request.getTitle(), request.getContent());

        boardService.saveBoard(board);

        return new CreateBoardResponse(board.getId());
    }

    /**
     * 게시글 단 수 별 조회
     */
//    @GetMapping("api/boards/{grade}")
    /**
     * 게시글 상세 조회
     */
    @GetMapping("api/boards/{id}")
    public DetailBoardResponse detailBoard(@PathVariable("id") Long id) {
        Board board = boardService.findOneBoard(id);
        board.addHitTimes();

        String memberNickname = board.getMember().getNickname();

        return new DetailBoardResponse(
                board.getId(),
                memberNickname,
                board.getTitle(),
                board.getContent(),
                board.getHitTimes(),
                board.getLikes(),
                board.getComments());
    }

    @DeleteMapping("api/boards/{id}")
    public void deleteBoard(@PathVariable("id") Long id) {
        Board findBoard = boardService.findOneBoard(id);

        boardService.deleteBoard(findBoard);
    }
    /**
     * DTO
     */

    @Data
    private class CreateBoardRequest {
        Long memberId;

        String title;

        String content;
    }
    @Data
    private class CreateBoardResponse {
        Long boardId;

        public CreateBoardResponse(Long boardId) {
            this.boardId = boardId;
        }
    }

    @Data
    @RequiredArgsConstructor
    private class DetailBoardResponse {
        Long boardId;

        String memberNickname;

        String title;

        String content;

        Integer hitTimes;

        Integer likes;

        List<Comment> comments;

        public DetailBoardResponse(Long boardId, String memberNickname, String title, String content, Integer hitTimes, Integer likes, List<Comment> comments) {
            this.boardId = boardId;
            this.memberNickname = memberNickname;
            this.title = title;
            this.content = content;
            this.hitTimes = hitTimes;
            this.likes = likes;
            this.comments = comments;
        }
    }

}
