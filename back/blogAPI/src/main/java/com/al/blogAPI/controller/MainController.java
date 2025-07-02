package com.al.blogAPI.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.service.MenuService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/blog")
public class MainController {
	private final MenuService menuService;

	@GetMapping("/menu")
	public String testMenu() {
	    return "메뉴 호출 성공";
	}
}
