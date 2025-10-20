package com.al.blogAPI.controller;

import java.util.List;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.GameDTO;
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

	@GetMapping("/algorithm/list")
	public ResponseEntity<List<StudyDTO>> getStudyList(
			@RequestParam(name = "page", defaultValue = "0") int page, // 요청할 페이지 번호 (0부터 시작)
	        @RequestParam(name = "size", defaultValue = "10") int size) { // 한 페이지당 가져올 아이템 개수
	        // @RequestParam(defaultValue = "id,desc") String[] sort) { // 정렬 기준 (예: "id,desc" -> id 기준 내림차순
		
		System.out.println("getStudyList page : " + page);
		System.out.println("getStudyList size : " + size);
		
		// Pageable : JPA 조회를 지원
		Pageable pageable = PageRequest.of(page, size);
		
		// 게임 목록 가져오기
		List<StudyDTO> studyList = studyService.getStudyList(pageable);

		System.out.println(studyList);
		
	    // 게임 목록 반환
	    return ResponseEntity.ok(studyList);
	}

}
