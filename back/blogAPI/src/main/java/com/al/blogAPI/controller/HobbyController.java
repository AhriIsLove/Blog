package com.al.blogAPI.controller;

import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.al.blogAPI.dto.GameDTO;
import com.al.blogAPI.service.HobbyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hobby")
public class HobbyController {
	private final HobbyService hobbyService;

	@PostMapping("/game/regist")
	public ResponseEntity<?> gameRegist(@RequestPart(name = "gameDTO") GameDTO dto, @RequestPart(name = "imageFile", required = false) MultipartFile file) {		
		System.out.println("game regist");
		System.out.println(dto);
		System.out.println(file);
		boolean result = hobbyService.gameRegist(dto, file);

		return ResponseEntity.ok().body("gameRegist 성공!");
	}

}
