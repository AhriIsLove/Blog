package com.al.blogAPI.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.al.blogAPI.entity.Common;
import com.al.blogAPI.entity.CommonId;

public interface CommonRepository extends JpaRepository<Common, CommonId> {
	@Query("SELECT c FROM Common c "
			+ "WHERE c.commonId.majorId = :majorId "
			+ "AND c.commonId.middleId = :middleId")
    List<Common> findCommonByMajorIdAndMiddleId(
        @Param("majorId") int majorId,
        @Param("middleId") int middleId
    );
}
