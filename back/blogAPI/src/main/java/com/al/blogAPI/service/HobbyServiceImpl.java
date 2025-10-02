package com.al.blogAPI.service;

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

}
