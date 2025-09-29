package com.al.blogAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.al.blogAPI.entity.UserLog;

public interface CommunityRepository extends JpaRepository<UserLog, Long>  {

}
