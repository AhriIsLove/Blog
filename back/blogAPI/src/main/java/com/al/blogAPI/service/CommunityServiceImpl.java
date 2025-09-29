package com.al.blogAPI.service;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.UserLogDTO;
import com.al.blogAPI.entity.UserLog;
import com.al.blogAPI.repository.CommunityRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityServiceImpl implements CommunityService {
	private final CommunityRepository communityRepository;
	
	@Override
	public UserLogDTO postUserLogRegist(UserLogDTO dto) {
		// dto -> entity;
		System.out.println(dto); 
		
		UserLog userLog = UserLog.builder()
				.ip(dto.getIp())
				.action(dto.getAction())
				.actionDate(dto.getActionDate())
				.build();
		
		System.out.println(userLog);
		
		communityRepository.save(userLog);

		// entity -> dto;
		
		return dto;
	}

}
