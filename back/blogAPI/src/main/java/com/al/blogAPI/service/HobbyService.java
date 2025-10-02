package com.al.blogAPI.service;

import org.springframework.web.multipart.MultipartFile;

import com.al.blogAPI.dto.GameDTO;

public interface HobbyService {

	boolean gameRegist(GameDTO dto, MultipartFile file);

}
