package chimhaha.moooky.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
public class Comment {

    @Id @GeneratedValue
    @Column(name = "COMMENT_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    private String content;

    private Date postedDate;
    //== 연관관계 메서드==//
    /**
     * 댓글 생성 시 member의 comments 에 추가
     */
    public void setMember(Member member) {
        this.member = member;
        member.getComments().add(this);
    }
    /**
     * 댓글 생성 시 board의 comments에 추가
     */
    public void setBoard(Board board) {
        this.board = board;
        board.getComments().add(this);
    }

    //== 생성 메서드==//
    /**
     * 생성
     */
    public static Comment createComment(Member member, Board board, String content) {
        Comment comment = new Comment();

        comment.setMember(member);
        comment.setBoard(board);
        comment.content = content;

        //생성 날짜 가져오기
        Date date = new Date();
        comment.postedDate = date;

        return comment;
    }
    /**
     * 변경
     */
    public Long changeCommentData(String content) {
        this.content = content;
        return this.id;
    }
}
