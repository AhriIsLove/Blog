package com.al.blogAPI.controller;

import org.springframework.web.bind.annotation.RestController;

import com.al.blogAPI.service.MenuService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class MainController {
	private final MenuService menuService;
}
