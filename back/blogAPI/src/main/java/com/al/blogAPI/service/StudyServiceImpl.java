package com.al.blogAPI.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.GameDTO;
import com.al.blogAPI.dto.StudyDTO;
import com.al.blogAPI.entity.Game;
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

	@Override
	public List<StudyDTO> getStudyList(Pageable pageable) {
		List<Study> studyList;
		
		// 페이징 처리가 없으면 전체 조회(개수만 필요)
		if(pageable.isUnpaged()) {
			studyList = studyRepository.findAll();
		}
		else {
	        int pageSize = pageable.getPageSize();
	        int pageNumber = pageable.getPageNumber();
	        int startRow = pageNumber * pageSize;
	        int endRow = startRow + pageSize;
	        
	        studyList = studyRepository.findAllWithPaging(startRow, endRow);
		}
		
        // Entity -> DTO
        List<StudyDTO> studyDTOs = studyList.stream().map(study -> StudyDTO.builder()
                // Game 엔티티의 필드를 GameDTO로 매핑
        		.id(study.getId())
        		.title(study.getTitle())
        		.type(study.getType())
        		// .content(study.getContent())
                .build()).collect(Collectors.toList());
        
		return studyDTOs;
	}
}
