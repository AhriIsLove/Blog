package com.al.blogAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.al.blogAPI.entity.Study;

public interface StudyRepository extends JpaRepository<Study, Long>  {

}
