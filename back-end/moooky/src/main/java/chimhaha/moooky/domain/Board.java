package chimhaha.moooky.domain;

import chimhaha.moooky.enums.Grade;
import lombok.Getter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
public class Board {

    @Id @GeneratedValue
    @Column(name = "BOARD_ID")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    private Date posted_date;

    @Enumerated(EnumType.STRING)
    private Grade grade;

    private String title;

    private String content;

    private Integer hit_times;

    private Integer likes;

    @OneToMany(mappedBy = "board")
    private List<Photo> photos = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<Comment> comments = new ArrayList<>();

    //== 생성 메서드 ==//
    /**
     * 생성
     */
    public static Board createBoard(Member member, String title, String content) {
        Board board = new Board();
        board.member = member;
        board.title = title;
        board.content = content;

        board.grade = Grade.FIRST;
        board.hit_times = 0;
        board.likes = 0;

        board.photos = new ArrayList<>();
        board.comments = new ArrayList<>();

        return board;
    }
}
