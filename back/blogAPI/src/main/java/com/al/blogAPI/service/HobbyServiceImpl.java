package com.al.blogAPI.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.al.blogAPI.dto.GameDTO;
import com.al.blogAPI.entity.Game;
import com.al.blogAPI.repository.GameRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class HobbyServiceImpl implements HobbyService {
	private final GameRepository gameRepository;
	
	@Override
	public boolean gameRegist(GameDTO dto, MultipartFile file) {

		Game game = Game.builder()
				.name(dto.getName())
				.type(dto.getType())
				.build();
		
		// System.out.println(userLog);
		
		gameRepository.save(game);

		return false;
	}

	@Override
	public List<GameDTO> getGameList(Pageable pageable) {
		// 페이지 정보 계산
        int pageSize = pageable.getPageSize();
        int pageNumber = pageable.getPageNumber();
        int startRow = pageNumber * pageSize;
        int endRow = startRow + pageSize;
        
        // 게임 목록 조회
        List<Game> gameList = gameRepository.findAllWithPaging(startRow, endRow);
        
        // Entity -> DTO
        List<GameDTO> gameDTOs = gameList.stream().map(game -> GameDTO.builder()
                // Game 엔티티의 필드를 GameDTO로 매핑
        		.id(game.getId())
                .name(game.getName())
                .type(game.getType())
                .image(game.getImage())
                .company(game.getCompany())
                .platform(game.getPlatform())
                .lastPlayDate(game.getLastPlayDate())
                .playTime(game.getPlayTime())
                .review(game.getReview())
                .price(game.getPrice())
                .buyPrice(game.getBuyPrice())
                .build()).collect(Collectors.toList());
        
		return gameDTOs;
	}

}
