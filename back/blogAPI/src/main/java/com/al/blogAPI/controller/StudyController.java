package com.al.blogAPI.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.StudyDTO;
import com.al.blogAPI.service.StudyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/study")
public class StudyController {
	private final StudyService studyService;

	@PostMapping("/algorithm/regist")
	public ResponseEntity<?> postAlgorithmRegist(@RequestBody StudyDTO dto) {		
		System.out.println(dto);
		
		// 공부 등록
		StudyDTO studyDTO = studyService.postAlgorithmRegist(dto);

		// 공부 등록 결과 반환
		return ResponseEntity.ok().body(studyDTO);
	}
	
}
