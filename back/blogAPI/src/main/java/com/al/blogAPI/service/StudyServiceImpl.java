package com.al.blogAPI.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

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
	public StudyDTO postStudyRegist(StudyDTO dto) {
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
	public List<StudyDTO> getItList(Pageable pageable) {
		List<Study> studyList;
		
		// 페이징 처리가 없으면 전체 조회(개수만 필요)
		if(pageable.isUnpaged()) {
			// type이 it인 것만 조회
			studyList = studyRepository.findByType(3/*It*/);
		}
		else {
	        int pageSize = pageable.getPageSize();
	        int pageNumber = pageable.getPageNumber();
	        int startRow = pageNumber * pageSize;
	        int endRow = startRow + pageSize;
	        
	        studyList = studyRepository.findByTypeWithPaging(3/*It*/, startRow, endRow);
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

	@Override
	public StudyDTO getStudyDetail(Long id) {
		Study study = studyRepository.findById(id).orElse(null);
		
		StudyDTO dto = StudyDTO.builder()
				.id(study.getId())
				.title(study.getTitle())
				.type(study.getType())
				.content(study.getContent())
				// 태그들을 "#"로 연결하여 하나의 문자열로 만듦
				.tags(study.getTags().stream()
						.map(StudyTag::getTag)
						.collect(Collectors.joining("#", "#", ""))) // 맨 앞에 # 붙이기
				.build();
		
		return dto;
	}

	@Override
	public StudyDTO putStudyEdit(StudyDTO dto) {
		// System.out.println("StudyServiceImpl putStudyEdit dto : " + dto);
		
		// 기존 공부 정보 조회
		Study existingStudy = studyRepository.findById(dto.getId()).orElse(null);
		if (existingStudy == null) {
			return null; // 또는 예외 처리
		}
		
		System.out.println("StudyServiceImpl putStudyEdit existingStudy : " + existingStudy);
		
		// 공부 정보 업데이트
		existingStudy.setTitle(dto.getTitle());
		existingStudy.setType(dto.getType());
		existingStudy.setContent(dto.getContent());
		
		// Tags 처리
		String tags = dto.getTags();
		// 기존 태그 삭제
		existingStudy.getTags().clear();
		if (tags != null && !tags.isEmpty()) {
			// 태그 문자열을 쉼표(#)로 분리하여 배열로 변환
			String[] tagArray = tags.split("#");
			// 각 태그를 GameTag 엔티티로 변환하여 게임에 추가
			for (String tagName : tagArray) {
				// 앞뒤 공백 제거
				tagName = tagName.trim();
				if (!tagName.isEmpty()) {
					// GameTag 엔티티 생성 및 게임에 추가
					existingStudy.addTag(new StudyTag(tagName, existingStudy));
				}
			}
		}
		
		// 변경된 게임 정보 저장
		studyRepository.save(existingStudy);
		
		StudyDTO updatedDTO = StudyDTO.builder()
				.id(existingStudy.getId())
				.title(existingStudy.getTitle())
				.type(existingStudy.getType())
				.content(existingStudy.getContent())
				// 태그들을 "#"로 연결하여 하나의 문자열로 만듦
				.tags(existingStudy.getTags().stream()
						.map(StudyTag::getTag)
						.collect(Collectors.joining("#", "#", ""))) // 맨 앞에 # 붙이기
				.build();
		
		return updatedDTO;
	}

	@Override
	public boolean deleteStudyDelete(Long studyId) {
		
		// 기존 게임 정보 조회
		Study existingStudy = studyRepository.findById(studyId).orElse(null);
		if (existingStudy != null) {
			// 게임 정보 삭제
			studyRepository.delete(existingStudy);
			return true;
		}

		return false;
	}
}
