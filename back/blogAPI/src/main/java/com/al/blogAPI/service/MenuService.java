package com.al.blogAPI.service;

import java.util.List;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;
import com.al.blogAPI.dto.SearchDTO;

public interface MenuService {

	MenuResponseDTO<MenuDTO> getMenus();

	MenuDTO getMenu(Long menu_id);
	
	boolean registSearch(SearchDTO searchDTO);

	MenuResponseDTO<MenuDTO> search(String keyword);

	MenuResponseDTO<MenuDTO> getSubMenus(Long menu_id);


}
