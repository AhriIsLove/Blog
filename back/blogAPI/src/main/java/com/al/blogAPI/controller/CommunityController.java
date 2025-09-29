package com.al.blogAPI.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.UserLogDTO;
import com.al.blogAPI.service.CommunityService;
import com.al.blogAPI.service.CommunityServiceImpl;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/community")
public class CommunityController {
	private final CommunityService communityService;
	

	@PostMapping("/userlog/regist")
	public UserLogDTO postUserLogRegist(@RequestBody UserLogDTO dto) {
		System.out.println(dto);
		
		UserLogDTO userLogDTO = communityService.postUserLogRegist(dto);
		
		
		
		return userLogDTO;
	}
}
