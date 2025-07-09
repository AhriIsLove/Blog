package com.al.blogAPI.controller;

import java.util.Map;

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

	@GetMapping("/menu")
	public MenuResponseDTO<MenuDTO> getMenu() {
		MenuResponseDTO<MenuDTO> menuDTOs = menuService.getMenus();
		
		return menuDTOs;
	}
	@GetMapping("/menu/{menu_id}")
	public MenuDTO getMenu(@PathVariable(name="menu_id") Long menu_id) {
		MenuDTO menuDTO = menuService.getMenu(menu_id);
		
		return menuDTO;
	}
	
	@PostMapping("/regist/search")
	public Map<String, Boolean> registSearch(@RequestBody SearchDTO searchDTO){
		boolean result = menuService.registSearch(searchDTO);
		
		return Map.of("result", result);
	}
	
	@GetMapping("/search/{keyword}")
	public MenuResponseDTO<MenuDTO> search(@PathVariable(name="keyword") String keyword){
		System.out.println("keyword : " + keyword);
		
		MenuResponseDTO<MenuDTO> menuResponseDTO = menuService.search(keyword);

		return menuResponseDTO;
	}
}
