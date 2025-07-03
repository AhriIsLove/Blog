package com.al.blogAPI.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.entity.Menu;
import com.al.blogAPI.repository.MenuRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MenuServiceImpl implements MenuService {
	private final MenuRepository menuRepository;

	// 최상위 메뉴 조회
	@Override
	public List<MenuDTO> getRootMenus() {
		List<MenuDTO> menuDTOs = null;

		// 최상위 메뉴 조회
		List<Menu> menus = menuRepository.findRootMenus();
		
		menuDTOs = menus.stream()
				.map(menu -> menuToDTO(menu))
				.collect(Collectors.toList());

		return menuDTOs;
	}

	private MenuDTO menuToDTO(Menu menu) {
		MenuDTO menuDTO = new MenuDTO();
		menuDTO.setId(menu.getId());
		menuDTO.setName(menu.getName());
		menuDTO.setParent_id(menu.getParent_id());
		
		//하위 메뉴
		List<MenuDTO> subMenuDTOs = null;
		List<Menu> subMenus = menuRepository.findSubMenus(menu.getId());
		subMenuDTOs = subMenus.stream()
				.map(subMenu -> menuToDTO(subMenu))
				.collect(Collectors.toList());

		
		menuDTO.setSub_menus(subMenuDTOs);
		
		return menuDTO;
	}
}
