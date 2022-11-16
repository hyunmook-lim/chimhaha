package chimhaha.moooky.apiController;

import chimhaha.moooky.domain.Board;
import chimhaha.moooky.domain.Comment;
import chimhaha.moooky.domain.Member;
import chimhaha.moooky.enums.Grade;
import chimhaha.moooky.service.BoardServiceImpl;
import chimhaha.moooky.service.MemberServiceImpl;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
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
    @GetMapping("api/boards/{grade}")
    public FindResult findBoards(@PathVariable("grade") Grade grade) {

        List<Board> findBoards = boardService.GradeBoards(grade);

        List<FindBoardsResponse> collect = findBoards.stream()
                .map(m -> new FindBoardsResponse(m.getMember().getNickname(), m.getTitle(), m.getHitTimes(), m.getLikes()))
                .collect(Collectors.toList());

        return new FindResult(collect);
    }

    /**
     * 게시글 상세 조회
     */
    @Transactional
    @GetMapping("api/boards/{Grade}/{id}")
    public DetailBoardResponse detailBoard(@PathVariable("id") Long id) {
        Board board = boardService.findOneBoard(id);



        // 조회수 1 증가
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

    /**
     * 게시글 단 수 수정
     */
    @Transactional
    @PostMapping("api/boards/{Grade}/{id}/{ChangedGrade}")
    public DetailBoardResponse changeGradeOfBoard(@PathVariable("id") Long id, @PathVariable("ChangedGrade") Grade changedGrade) {
        Board board = boardService.findOneBoard(id);

        board.changeGrade(changedGrade);

        return new DetailBoardResponse(
                board.getId(),
                board.getMember().getNickname(),
                board.getTitle(),
                board.getContent(),
                board.getHitTimes(),
                board.getLikes(),
                board.getComments());
    }

    /**
     * 게시글 삭제
     */
    @DeleteMapping("api/boards/{Grade}/{id}")
    public void deleteBoard(@PathVariable("id") Long id) {
        Board findBoard = boardService.findOneBoard(id);

        boardService.deleteBoard(findBoard);
    }

    /**
     * 이미지 저장
     */
//    @PostMapping(value = "api/image/upload")
//    public ModelAndView image(MultipartHttpServletRequest request) throws Exception {
//        ModelAndView mav = new ModelAndView("upload");
//
//        return
//    }




    /**
     * DTO
     */

    @Data
    static class CreateBoardRequest {
        private Long memberId;

        private String title;

        private String content;
    }
    @Data
    static class CreateBoardResponse {
        private Long boardId;

        public CreateBoardResponse(Long boardId) {
            this.boardId = boardId;
        }
    }

    /**
     * 게시글 리스트 조회
     */
    @Data
    static class FindBoardsResponse {
        private String memberNickname;

        private String title;

        private Integer hitTimes;

        private Integer likes;

        public FindBoardsResponse(String memberNickname, String title, Integer hitTimes, Integer likes) {
            this.memberNickname = memberNickname;
            this.title = title;
            this.hitTimes = hitTimes;
            this.likes = likes;
        }
    }

    @Data
    @AllArgsConstructor
    static class FindResult<T> {
        private T data;
    }


    @Data
    static class DetailBoardResponse {
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
