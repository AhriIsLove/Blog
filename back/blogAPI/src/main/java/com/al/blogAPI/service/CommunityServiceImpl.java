package com.al.blogAPI.service;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.UserLogDTO;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class CommunityServiceImpl implements CommunityService {@Override
	public UserLogDTO postUserLogRegist(UserLogDTO dto) {
		// TODO Auto-generated method stub
		return null;
	}

}
