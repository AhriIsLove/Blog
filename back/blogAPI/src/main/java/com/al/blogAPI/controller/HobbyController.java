package com.al.blogAPI.controller;

import java.util.List;
import java.util.Map;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.al.blogAPI.dto.GameDTO;
import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;
import com.al.blogAPI.service.HobbyService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hobby")
public class HobbyController {
	private final HobbyService hobbyService;

	@PostMapping("/game/regist")
	public ResponseEntity<?> postGameRegist(@RequestPart(name = "gameDTO") GameDTO dto, @RequestPart(name = "imageFile", required = false) MultipartFile file) {		
//		System.out.println("game regist");
		System.out.println(dto);
//		System.out.println(file);
		
		// 이미지 파일 설정
		dto.setImageFile(file);
		
		// 게임 등록
		boolean result = hobbyService.gameRegist(dto);

		// 게임 등록 결과 반환
		return ResponseEntity.ok().body("gameRegist 성공!");
	}
	
	@GetMapping("/game/list")
	public ResponseEntity<List<GameDTO>> getGameList(
			@RequestParam(name = "page", defaultValue = "0") int page, // 요청할 페이지 번호 (0부터 시작)
	        @RequestParam(name = "size", defaultValue = "10") int size) { // 한 페이지당 가져올 아이템 개수
	        // @RequestParam(defaultValue = "id,desc") String[] sort) { // 정렬 기준 (예: "id,desc" -> id 기준 내림차순
		
//		System.out.println("getGameList page : " + page);
//		System.out.println("getGameList size : " + size);
		
		// Pageable : JPA 조회를 지원
		Pageable pageable = PageRequest.of(page, size);
		
		// 게임 목록 가져오기
		List<GameDTO> gameList = hobbyService.getGameList(pageable);

		System.out.println(gameList);
		
	    // 게임 목록 반환
	    return ResponseEntity.ok(gameList);
	}

	@GetMapping("/game/detail")
	public ResponseEntity<GameDTO> getGameDetail(@RequestParam(name = "gameId") Long gameId) {
//		 System.out.println("getGame id : " + gameId);
		
		// 게임 상세 정보 가져오기
		GameDTO game = hobbyService.getGameDetail(gameId);

		System.out.println(game);
		
	    // 게임 목록 반환
	    return ResponseEntity.ok(game);
	}

	@PutMapping("/game/edit")
	public ResponseEntity<?> putGameEdit(@RequestPart(name = "gameDTO") GameDTO dto, @RequestPart(name = "imageFile", required = false) MultipartFile file) {
		 System.out.println("getGame edit : " + dto);
		 System.out.println("getGame edit file : " + file);

		// 이미지 파일 설정
		dto.setImageFile(file);
			
		// 게임 수정
		boolean result = hobbyService.putGameEdit(dto);

	    // 게임 수정 결과 반환
	    return ResponseEntity.ok(result);
	}

	@DeleteMapping("/game/delete")
	public ResponseEntity<?> deleteGameDelete(@RequestParam(name = "gameId") Long gameId) {
		// System.out.println("getGame id : " + gameId);

		// 게임 삭제
		boolean result = hobbyService.deleteGameDelete(gameId);

	    // 게임 삭제 결과 반환
	    return ResponseEntity.ok(result);
	}
}
