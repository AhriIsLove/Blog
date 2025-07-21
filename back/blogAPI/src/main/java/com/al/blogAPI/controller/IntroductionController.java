package com.al.blogAPI.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.InfoDTO;
import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;
import com.al.blogAPI.service.IntroductionService;
import com.al.blogAPI.service.MenuService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/introduction")
public class IntroductionController {
	private final IntroductionService introductionService;

	@GetMapping("/info")
	public InfoDTO getInfo() {
		InfoDTO infoDTO = introductionService.getInfo();
		
		return infoDTO;
	}
}
