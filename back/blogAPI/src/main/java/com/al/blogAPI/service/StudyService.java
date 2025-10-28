package com.al.blogAPI.service;

import java.util.List;

import org.springframework.data.domain.Pageable;

import com.al.blogAPI.dto.StudyDTO;

public interface StudyService {

	StudyDTO postStudyRegist(StudyDTO dto);

	List<StudyDTO> getItList(Pageable pageable);

	StudyDTO getStudyDetail(Long id);

	StudyDTO putStudyEdit(StudyDTO dto);

	boolean deleteStudyDelete(Long studyId);

}
