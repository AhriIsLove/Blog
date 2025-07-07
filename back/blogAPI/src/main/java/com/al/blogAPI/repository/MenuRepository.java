package com.al.blogAPI.repository;

import java.util.List;

import com.al.blogAPI.entity.Menu;
import com.al.blogAPI.entity.Search;

public interface MenuRepository {

	List<Menu> findRootMenus();

	List<Menu> findSubMenus(Long id);
	
	Menu findMenu(Long id);

	boolean regist(Search search);

	List<Menu> findMenusByKeyword(String keyword);

}
