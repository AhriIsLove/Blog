package com.al.blogAPI.service;

import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.StudyDTO;
import com.al.blogAPI.entity.GameTag;
import com.al.blogAPI.entity.Study;
import com.al.blogAPI.entity.StudyTag;
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

		// Tags 처리
		String tags = dto.getTags();
		if (tags != null && !tags.isEmpty()) {
			// 태그 문자열을 쉼표(#)로 분리하여 배열로 변환
			String[] tagArray = tags.split("#");
			// 각 태그를 StudyTag 엔티티로 변환하여 공부에 추가
			for (String tagName : tagArray) {
				// 앞뒤 공백 제거
				tagName = tagName.trim();
				if (!tagName.isEmpty()) {
					// StudyTag 엔티티 생성 및 게임에 추가
					study.addTag(new StudyTag(tagName, study));
				}
			}
		}
		
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
