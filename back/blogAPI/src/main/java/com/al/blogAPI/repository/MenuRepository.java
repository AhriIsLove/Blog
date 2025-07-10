package com.al.blogAPI.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.al.blogAPI.entity.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long> {
	@Query("SELECT m FROM Menu m WHERE m.parent_id IS NULL")
	List<Menu> readListRoot();

	@Query("SELECT m FROM Menu m WHERE m.parent_id = :id")
	List<Menu> readListSub(@Param("id") Long id);
	
	@Query("SELECT m FROM Menu m WHERE m.id = :id")
	Optional<Menu> selectOne(@Param("id") Long id);

}
