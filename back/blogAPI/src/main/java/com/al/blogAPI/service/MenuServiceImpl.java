package com.al.blogAPI.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;
import com.al.blogAPI.dto.SearchDTO;
import com.al.blogAPI.entity.Menu;
import com.al.blogAPI.entity.Search;
import com.al.blogAPI.repository.MenuRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class MenuServiceImpl implements MenuService {
	private final MenuRepository menuRepository;

	// 최상위 메뉴 조회
	@Override
	public MenuResponseDTO<MenuDTO> getMenus() {
		// 최상위 메뉴 조회
		List<Menu> menus = menuRepository.findRootMenus();
		List<MenuDTO> menuDTOs = menus.stream()
				.map(menu -> menuToDTO(menu, true))
				.collect(Collectors.toList());
		
		MenuResponseDTO<MenuDTO> menuResponseDTOs = MenuResponseDTO.<MenuDTO>builder()
				.dtoList(menuDTOs)
				.build();
		
		return menuResponseDTOs;
	}

	@Override
	public MenuDTO getMenu(Long menu_id) {
		Menu menu = menuRepository.findMenu(menu_id);
		
		MenuDTO menuDTO = menuToDTO(menu, true);
		
		return menuDTO;
	}
	
	private MenuDTO menuToDTO(Menu menu, boolean getSubMenu) {
		MenuDTO menuDTO = new MenuDTO();
		menuDTO.setId(menu.getId());
		menuDTO.setName(menu.getName());
		menuDTO.setLink(menu.getLink());
		menuDTO.setParent_id(menu.getParent_id());
		
		//하위 메뉴
		List<MenuDTO> subMenuDTOs = null;
		if(getSubMenu)
		{
			List<Menu> subMenus = menuRepository.findSubMenus(menu.getId());
			subMenuDTOs = subMenus.stream()
					.map(subMenu -> menuToDTO(subMenu, true))
					.collect(Collectors.toList());
			
			menuDTO.setSub_menus(subMenuDTOs);
		}
		
		return menuDTO;
	}

	@Override
	public boolean registSearch(SearchDTO searchDTO) {
		Search search = dtoToSearch(searchDTO);
		
		boolean result = menuRepository.regist(search);
		
		return result;
	}
	
	private Search dtoToSearch(SearchDTO searchDTO) {
		Search search = Search.builder()
				.keyword(searchDTO.getKeyword())
				.menu(menuRepository.findMenu(searchDTO.getMenu_id()))
				.build();
		
		return search;
	}

	@Override
	public MenuResponseDTO<MenuDTO> search(String keyword) {
//		키워드에 해당하는 메뉴들 가져오기
		List<Menu> menus = menuRepository.findMenusByKeyword(keyword);
		
//		DTO로 만들기
		List<MenuDTO> menuDTOs = menus.stream()
				.map(menu -> menuToDTO(menu, false))
				.collect(Collectors.toList());
		
//		DTO묶음으로 만들기
		MenuResponseDTO<MenuDTO> menuResponseDTOs = MenuResponseDTO.<MenuDTO>builder()
				.dtoList(menuDTOs)
				.build();
		
		return menuResponseDTOs;
	}

}
