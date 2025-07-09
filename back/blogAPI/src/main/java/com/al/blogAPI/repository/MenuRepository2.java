package com.al.blogAPI.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.al.blogAPI.entity.Menu;

public interface MenuRepository2 extends JpaRepository<Menu, Long> {
	@Query("SELECT m FROM Menu m WHERE m_id = :id")
	Optional<Menu> selectOne(@Param("id") Long id);
}
