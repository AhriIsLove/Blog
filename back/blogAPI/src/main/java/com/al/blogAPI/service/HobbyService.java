package com.al.blogAPI.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import com.al.blogAPI.dto.GameDTO;

public interface HobbyService {

	boolean gameRegist(GameDTO dto);

	List<GameDTO> getGameList(Pageable pageable);

	GameDTO getGameDetail(Long gameId);

	boolean postGameEdit(GameDTO dto);

}
