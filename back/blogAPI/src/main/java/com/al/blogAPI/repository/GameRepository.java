package com.al.blogAPI.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.al.blogAPI.entity.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {
	@Query(value = 
				"SELECT * FROM ( "
			+ 		"SELECT A.*, ROWNUM AS RNUM FROM ( "
			+ 			"SELECT * FROM GAME "
			+ 			"WHERE UPPER(NAME) LIKE UPPER('%' || :keyword || '%') "
			+ 			"OR UPPER(TYPE) LIKE UPPER('%' || :keyword || '%') "
			+ 			"OR UPPER(COMPANY) LIKE UPPER('%' || :keyword || '%') "
			+ 			"OR UPPER(PLATFORM) LIKE UPPER('%' || :keyword || '%') "
			// + 			"OR UPPER(REVIEW) LIKE UPPER('%' || :keyword || '%') "
			+ 			"OR ID IN (SELECT GAME_ID FROM GAME_TAG WHERE UPPER(TAG) LIKE UPPER('%' || :keyword || '%')) "
			+ 			"ORDER BY LAST_PLAY_DATE DESC ) A "
			+ 		"WHERE ROWNUM <= :endRow) "
			+ 	"WHERE RNUM > :startRow"
			, nativeQuery = true)
	List<Game> findAllWithPaging(@Param("startRow") int startRow, @Param("endRow") int endRow, @Param("keyword") String keyword);
}
