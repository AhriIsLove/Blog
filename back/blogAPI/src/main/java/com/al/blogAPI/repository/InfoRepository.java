package com.al.blogAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.al.blogAPI.entity.Info;
import com.al.blogAPI.entity.InfoId;

public interface InfoRepository extends JpaRepository<Info, InfoId> {

}
