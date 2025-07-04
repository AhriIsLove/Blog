package com.al.blogAPI.service;

import java.util.List;

import com.al.blogAPI.dto.MenuDTO;
import com.al.blogAPI.dto.MenuResponseDTO;

public interface MenuService {

	MenuResponseDTO<MenuDTO> getMenus();

}
