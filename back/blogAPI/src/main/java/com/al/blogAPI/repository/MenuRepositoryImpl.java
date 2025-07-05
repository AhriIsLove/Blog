package com.al.blogAPI.repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.stereotype.Repository;

import com.al.blogAPI.entity.Menu;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class MenuRepositoryImpl implements MenuRepository {
	private final EntityManager entityManager;

	@Override
	public List<Menu> findRootMenus() {
		List<Menu> menus = entityManager.createQuery
				("SELECT m FROM Menu m " + "WHERE m.parent_id IS NULL", Menu.class)
				.getResultList();

		return menus;
	}

	@Override
	public List<Menu> findSubMenus(Long id) {
		List<Menu> subMenus = entityManager.createQuery
				("SELECT m FROM Menu m " + "WHERE m.parent_id = :id", Menu.class)
				.setParameter("id", id)
				.getResultList();
		
		return subMenus;
	}

}
