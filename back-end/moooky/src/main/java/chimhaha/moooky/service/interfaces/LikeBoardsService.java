package chimhaha.moooky.service.interfaces;

import chimhaha.moooky.domain.LikeBoards;

import java.util.List;

public interface LikeBoardsService {
    Long saveLikeBoards(LikeBoards likeBoards);

    List<LikeBoards> findLikeBoards(Long memberId);

    void deleteLikeBoards(LikeBoards likeBoards);
}
