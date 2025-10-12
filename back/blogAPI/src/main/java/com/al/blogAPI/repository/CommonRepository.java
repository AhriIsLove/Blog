package com.al.blogAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.al.blogAPI.entity.Common;
import com.al.blogAPI.entity.CommonId;

public interface CommonRepository extends JpaRepository<Common, CommonId> {

}
