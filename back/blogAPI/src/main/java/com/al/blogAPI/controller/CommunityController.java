package com.al.blogAPI.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.UserLogDTO;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/community")
public class CommunityController {

	@PostMapping("/userlog/regist")
	public UserLogDTO getInfo(@RequestBody UserLogDTO dto) {
		System.out.println(dto);
		
		UserLogDTO userLogDTO = new UserLogDTO();
		
		
		
		return userLogDTO;
	}
}
