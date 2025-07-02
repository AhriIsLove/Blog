package com.al.blogAPI.service;

import org.springframework.stereotype.Service;

import com.al.blogAPI.repository.MenuRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuService {
	private final MenuRepository menuRepository;
}
