package com.al.blogAPI.service;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.CommonDTO;
import com.al.blogAPI.entity.Common;
import com.al.blogAPI.entity.CommonId;
import com.al.blogAPI.repository.CommonRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class CommonServiceImpl implements CommonService {
	private final CommonRepository commonRepository;
	
	@Override
	public void registCommon(CommonDTO commonDTO) {
		
		CommonId commonId = new CommonId(commonDTO.getMajorId(), commonDTO.getMiddleId(), commonDTO.getSmallId());
		
		// dto -> entity;
		Common common = Common.builder()
				.commonId(commonId) // 복합키 설정 필요
				.name(commonDTO.getName())
				.build();
		
		commonRepository.save(common);
	}

}
