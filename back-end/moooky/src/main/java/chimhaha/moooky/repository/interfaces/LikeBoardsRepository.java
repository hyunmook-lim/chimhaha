package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.LikeBoards;

import java.util.List;

public interface LikeBoardsRepository {
    void save(LikeBoards likeBoards);

    List<LikeBoards> findByMemberAndBoard(Long memberId, Long boardId);

    void delete(LikeBoards likeBoards);
}
