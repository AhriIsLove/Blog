package com.al.blogAPI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.al.blogAPI.entity.Study;

public interface StudyRepository extends JpaRepository<Study, Long>  {

	@Query(value = 
				"SELECT * FROM STUDY "
			+ 		"WHERE type IN "
			+ 		"( SELECT name FROM COMMON WHERE major_id = 1 AND middle_id = :type ) "
			, nativeQuery = true)
	List<Study> findByType(@Param("type") int type);
	
	@Query(value = 
				"SELECT * FROM ( "
			+ 		"SELECT A.*, ROWNUM AS RNUM FROM ( "
			+ 			"SELECT * FROM STUDY "
			+ 				"WHERE type IN ( SELECT name FROM COMMON WHERE major_id = 1 AND middle_id = :type ) "
			+ 				"ORDER BY ID DESC ) A "
			+ 		"WHERE ROWNUM <= :endRow) "
			+ 	"WHERE RNUM > :startRow"
			, nativeQuery = true)
	List<Study> findByTypeWithPaging(@Param("type") int type, @Param("startRow") int startRow, @Param("endRow") int endRow);

}
