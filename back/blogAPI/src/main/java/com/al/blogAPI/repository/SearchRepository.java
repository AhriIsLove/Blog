package com.al.blogAPI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.al.blogAPI.entity.Menu;
import com.al.blogAPI.entity.Search;

public interface SearchRepository extends JpaRepository<Search, Long> {
	@Query("SELECT DISTINCT s.menu FROM Search s WHERE s.keyword LIKE %:keyword%")
	List<Menu> readList(@Param("keyword") String keyword);
}
