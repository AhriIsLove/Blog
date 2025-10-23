package com.al.blogAPI.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.al.blogAPI.dto.StudyDTO;

public interface StudyService {

	StudyDTO postAlgorithmRegist(StudyDTO dto);

	List<StudyDTO> getStudyList(Pageable pageable);

	StudyDTO getStudyDetail(Long id);

	StudyDTO putStudyEdit(StudyDTO dto);

	boolean deleteStudyDelete(Long studyId);

}
