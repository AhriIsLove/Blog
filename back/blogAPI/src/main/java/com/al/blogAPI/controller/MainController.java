package com.al.blogAPI.controller;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;
import com.al.blogAPI.dto.SearchDTO;
import com.al.blogAPI.service.MenuService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/blog")
public class MainController {
	private final MenuService menuService;

	@Value("${com.al.blogAPI.images.path}")
	private String imagesPath;

	@GetMapping("/menu")
	public MenuResponseDTO<MenuDTO> getMenu() {
		MenuResponseDTO<MenuDTO> menuDTOs = menuService.getMenus();

		return menuDTOs;
	}

	@GetMapping("/menu/{menu_id}")
	public MenuDTO getMenu(@PathVariable(name = "menu_id") Long menu_id) {
		MenuDTO menuDTO = menuService.getMenu(menu_id);

		return menuDTO;
	}

	@GetMapping("/submenus/{menu_id}")
	public MenuResponseDTO<MenuDTO> getSubMenus(@PathVariable(name = "menu_id") Long menu_id) {
		MenuResponseDTO<MenuDTO> menuDTO = menuService.getSubMenus(menu_id);

		return menuDTO;
	}

	@PostMapping("/regist/search")
	public Map<String, Boolean> registSearch(@RequestBody SearchDTO searchDTO) {
		System.out.println(searchDTO);
		boolean result = menuService.registSearch(searchDTO);

		return Map.of("result", result);
	}

	@GetMapping("/search/{keyword}")
	public MenuResponseDTO<MenuDTO> search(@PathVariable(name = "keyword") String keyword) {
		System.out.println("keyword : " + keyword);

		MenuResponseDTO<MenuDTO> menuResponseDTO = menuService.search(keyword);

		return menuResponseDTO;
	}

	@GetMapping("image/{filename}")
	public ResponseEntity<Resource> getImage(@PathVariable(name = "filename") String filename) throws IOException {
		// 폴더 확인
		File tempFolder = new File(imagesPath);
		if (tempFolder.exists() == false) {
			// 폴더 생성
			tempFolder.mkdir();
		}

		// 이미지 리소스 가져오기
		Path path = Paths.get(imagesPath).resolve(filename).normalize();
		Resource resource = new UrlResource(path.toUri());

		// 파일 없음
		if (!resource.exists()) {
			return ResponseEntity.notFound().build();
		}

		// 파일 확장자 확인
		String contentType;
		if (filename.toLowerCase().endsWith(".png")) {
			contentType = "image/png";
		} else if (filename.toLowerCase().endsWith(".jpg") || filename.toLowerCase().endsWith(".jpeg")) {
			contentType = "image/jpeg";
		} else if (filename.toLowerCase().endsWith(".gif")) {
			contentType = "image/gif";
		} else {
			contentType = "application/octet-stream"; // 기본값
		}

		// 이미지 리소스 확장자 맞춰서 반환
		return ResponseEntity.ok().contentType(MediaType.parseMediaType(contentType)).body(resource);
	}

}
