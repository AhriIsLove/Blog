package com.al.blogAPI.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.al.blogAPI.entity.Study;

public interface StudyRepository extends JpaRepository<Study, Long>  {

	@Query(value = 
				"SELECT * FROM ( "
			+ 		"SELECT A.*, ROWNUM AS RNUM FROM ( "
			+ 			"SELECT * FROM STUDY ORDER BY ID DESC ) A "
			+ 		"WHERE ROWNUM <= :endRow) "
			+ 	"WHERE RNUM > :startRow"
			, nativeQuery = true)
	List<Study> findAllWithPaging(@Param("startRow") int startRow, @Param("endRow") int endRow);

}
