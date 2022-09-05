package chimhaha.moooky.service;

import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.repository.LikeBoardsRepositoryImpl;
import chimhaha.moooky.service.interfaces.LikeBoardsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikeBoardsServiceImpl implements LikeBoardsService {
    private final LikeBoardsRepositoryImpl likeBoardsRepository;

    @Override
    @Transactional
    public Long saveLikeBoards(LikeBoards likeBoards) {
        likeBoardsRepository.save(likeBoards);
        return likeBoards.getId();
    }

    @Override
    public List<LikeBoards> findLikeBoards(Long memberId, Long boardId) {
        List<LikeBoards> findLikeBoards = likeBoardsRepository.findByMemberAndBoard(memberId, boardId);

        return findLikeBoards;
    }

    @Override
    @Transactional
    public void deleteLikeBoards(LikeBoards likeBoards) {
        likeBoardsRepository.delete(likeBoards);
    }
}
