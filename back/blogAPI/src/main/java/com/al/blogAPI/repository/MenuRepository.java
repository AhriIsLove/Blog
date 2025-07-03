package com.al.blogAPI.repository;

import java.util.List;

import com.al.blogAPI.entity.Menu;

public interface MenuRepository {

	List<Menu> findRootMenus();

	List<Menu> findSubMenus(Long id);

}
