package chimhaha.moooky.repository.interfaces;

import chimhaha.moooky.domain.LikeBoards;

import java.util.List;

public interface LikeBoardsRepository {
    void save(LikeBoards likeBoards);

    List<LikeBoards> findByMember(Long memberId);

    void delete(LikeBoards likeBoards);
}
