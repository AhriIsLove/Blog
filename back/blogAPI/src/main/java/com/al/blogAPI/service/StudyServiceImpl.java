package com.al.blogAPI.service;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.StudyDTO;
import com.al.blogAPI.entity.Study;
import com.al.blogAPI.repository.StudyRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class StudyServiceImpl implements StudyService {
	private final StudyRepository studyRepository;

	@Override
	public StudyDTO postAlgorithmRegist(StudyDTO dto) {
		// DTO -> Entity
		Study study = Study.builder()
		        .title(dto.getTitle())
		        .type(dto.getType())
		        .content(dto.getContent())
		        .build();
		
		// 저장
		Study savedStudy = studyRepository.save(study);
		
		// Entity -> DTO
		StudyDTO studyDTO = StudyDTO.builder()
				.id(savedStudy.getId())
				.title(savedStudy.getTitle())
				.type(savedStudy.getType())
				.content(savedStudy.getContent())
				.build();
				
		return studyDTO;
	}
}
