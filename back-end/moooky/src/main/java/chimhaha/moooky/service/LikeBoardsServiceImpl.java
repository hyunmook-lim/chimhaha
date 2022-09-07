package chimhaha.moooky.service;

import chimhaha.moooky.domain.LikeBoards;
import chimhaha.moooky.repository.BoardRepositoryImpl;
import chimhaha.moooky.repository.LikeBoardsRepositoryImpl;
import chimhaha.moooky.service.interfaces.LikeBoardsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikeBoardsServiceImpl implements LikeBoardsService {
    private final LikeBoardsRepositoryImpl likeBoardsRepository;
    private final BoardRepositoryImpl boardRepository;

    @Override
    @Transactional
    public Long saveLikeBoards(LikeBoards likeBoards) {
        likeBoardsRepository.save(likeBoards);
        return likeBoards.getId();
    }

    @Override
    public List<LikeBoards> findLikeBoards(Long memberId) {
        log.info("here is likeBoardsService");
        log.info("memberId = {}", memberId);
        List<LikeBoards> findLikeBoards = likeBoardsRepository.findByMember(memberId);
        log.info("likeBoard = {}", findLikeBoards);
        return findLikeBoards;
    }

    @Override
    @Transactional
    public void deleteLikeBoards(LikeBoards likeBoards) {
        likeBoardsRepository.delete(likeBoards);
    }
}
