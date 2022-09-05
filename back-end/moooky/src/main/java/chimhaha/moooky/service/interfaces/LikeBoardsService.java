package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.LikeBoards;

import java.util.List;

public interface LikeBoardsService {
    Long saveLikeBoards(LikeBoards likeBoards);

    List<LikeBoards> findLikeBoards(Long memberId, Long boardId);

    void deleteLikeBoards(LikeBoards likeBoards);
}
