package com.al.blogAPI.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;
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
}
