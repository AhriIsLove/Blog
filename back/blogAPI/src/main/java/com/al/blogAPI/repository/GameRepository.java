package com.al.blogAPI.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.al.blogAPI.entity.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
