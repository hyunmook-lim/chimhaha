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

    private Date postedDate;

    @Enumerated(EnumType.STRING)
    private Grade grade;

    private String title;

    private String content;

    private Integer hitTimes;

    private Integer likes;

    @OneToMany(mappedBy = "board")
    private List<Photo> photos = new ArrayList<>();

    @OneToMany(mappedBy = "board")
    private List<Comment> comments = new ArrayList<>();

    //== 연관 관계 메서드 ==//
    /**
     * 게시글 작성 시 멤버 boards에 추가
     */
    public void setMember(Member member) {
        this.member = member;
        member.getBoards().add(this);
    }

    //== 생성 메서드 ==//
    /**
     * 생성
     */
    public static Board createBoard(Member member, String title, String content) {
        Board board = new Board();
        board.setMember(member);
        board.title = title;
        board.content = content;

        board.grade = Grade.FIRST;
        board.hitTimes = 0;
        board.likes = 0;

        board.photos = new ArrayList<>();
        board.comments = new ArrayList<>();

        return board;
    }
    /**
     * 변경
     */
    public Long changeBoardData(String title, String content, Photo... photos) {
        this.title = title;
        this.content = content;
        this.photos = List.of(photos);

        //날짜를 변경 날짜로 수정

        return this.id;
    }

    //== 비즈니스 로직==//
    /**
     * 조회수 증가
     */
    public void addHitTimes() {
        ++this.hitTimes;
    }
    /**
     * 좋아요 수 증가
     */
    public void addLikes() {
        ++this.likes;
    }
    /**
     * 단 수 변경
     */
    public void changeGrade(Grade grade) {
        this.grade = grade;
    }
    /**
     * 전체 댓글 수
     */
    public int getTotalComments() {
        return this.comments.size();
    }
}
