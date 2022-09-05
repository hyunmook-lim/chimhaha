package chimhaha.moooky.domain;

import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class LikeBoards {
    @Id @GeneratedValue
    @Column(name = "LIKE_BOARD_ID")
    private  Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "BOARD_ID")
    private Board board;

    /**
     * 생성
     */
    public static LikeBoards createLikeBoards(Member member, Board board) {
        LikeBoards likeBoards = new LikeBoards();

        likeBoards.member = member;
        likeBoards.board = board;

        return likeBoards;
    }
}
