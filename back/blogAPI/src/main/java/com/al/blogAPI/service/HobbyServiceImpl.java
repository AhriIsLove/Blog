package com.al.blogAPI.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.al.blogAPI.Util.FileManager;
import com.al.blogAPI.dto.GameDTO;
import com.al.blogAPI.entity.Game;
import com.al.blogAPI.entity.GameTag;
import com.al.blogAPI.repository.GameRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class HobbyServiceImpl implements HobbyService {
	private final GameRepository gameRepository;
	private final FileManager fileManager;
	
	@Override
	public boolean gameRegist(GameDTO dto) {
		// 이미지 파일 복사
		MultipartFile imageFile = dto.getImageFile();
		String fileName = fileManager.saveFile(imageFile);
		dto.setImage(fileName);
		
		// DTO -> Entity
		Game game = Game.builder()
				.name(dto.getName())
				.type(dto.getType())
				.image(dto.getImage())
				.company(dto.getCompany())
				.platform(dto.getPlatform())
				.lastPlayDate(dto.getLastPlayDate())
				.playTime(dto.getPlayTime())
				.review(dto.getReview())
				.price(dto.getPrice())
				.buyPrice(dto.getBuyPrice())
				.build();

		// Tags 처리
		String tags = dto.getTags();
		if (tags != null && !tags.isEmpty()) {
			// 태그 문자열을 쉼표(#)로 분리하여 배열로 변환
			String[] tagArray = tags.split("#");
			// 각 태그를 GameTag 엔티티로 변환하여 게임에 추가
			for (String tagName : tagArray) {
				// 앞뒤 공백 제거
				tagName = tagName.trim();
				if (!tagName.isEmpty()) {
					// GameTag 엔티티 생성 및 게임에 추가
					game.addTag(new GameTag(tagName, game));
				}
			}
		}
		
		// 게임 정보 저장
		gameRepository.save(game);
		
		return true;
		
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

	@Override
	public GameDTO getGameDetail(Long gameId) {
		Game game = gameRepository.findById(gameId).orElse(null);
		
		if (game == null) {
			return null; // 또는 예외 처리
		}
		// Entity -> DTO
		GameDTO dto = GameDTO.builder()
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
				.build();
		
		return dto;
	}

	@Override
	public boolean putGameEdit(GameDTO dto) {
		
		// System.out.println("HobbyServiceImpl - postGameEdit()");
		
		// 기존 게임 정보 조회
		Game existingGame = gameRepository.findById(dto.getId()).orElse(null);
		if (existingGame == null) {
			return false; // 또는 예외 처리
		}
		
		// 이미지 파일 처리
		MultipartFile imageFile = dto.getImageFile();
		if (imageFile != null && !imageFile.isEmpty()) {
			// 기존 이미지 파일 삭제
			String existingImage = existingGame.getImage();
			if (existingImage != null && !existingImage.isEmpty()) {
				fileManager.deleteFile(existingImage);
			}
			
			// 새로운 이미지 파일 저장
			String newFileName = fileManager.saveFile(imageFile);
			existingGame.setImage(newFileName);
		}
		
		// 게임 정보 업데이트
		existingGame.setName(dto.getName());
		existingGame.setType(dto.getType());
		existingGame.setCompany(dto.getCompany());
		existingGame.setPlatform(dto.getPlatform());
		existingGame.setLastPlayDate(dto.getLastPlayDate());
		existingGame.setPlayTime(dto.getPlayTime());
		existingGame.setReview(dto.getReview());
		existingGame.setPrice(dto.getPrice());
		existingGame.setBuyPrice(dto.getBuyPrice());
		
		// 변경된 게임 정보 저장
		gameRepository.save(existingGame);
		
		return true;
	}

}
