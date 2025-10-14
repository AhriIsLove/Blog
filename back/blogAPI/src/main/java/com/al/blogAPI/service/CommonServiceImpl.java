package com.al.blogAPI.service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

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
		
		// dto -> entity
		Common common = Common.builder()
				.commonId(commonId) // 복합키 설정 필요
				.name(commonDTO.getName())
				.build();
		
		commonRepository.save(common);
	}

	@Override
	public List<CommonDTO> getCommon(CommonDTO commonDTO) {
		// common 의 Major, Middle로 조회
		List<Common> commonList = commonRepository.findCommonByMajorIdAndMiddleId(commonDTO.getMajorId(), commonDTO.getMiddleId());
		
		return commonList.stream()
		        .map(commonEntity -> CommonDTO.builder()
		            .majorId(commonEntity.getCommonId().getMajorId())
		            .middleId(commonEntity.getCommonId().getMiddleId())
		            .smallId(commonEntity.getCommonId().getSmallId())
		            .name(commonEntity.getName())
		            .build())
		        .collect(Collectors.toList());
	}

}
