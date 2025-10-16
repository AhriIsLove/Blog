package com.al.blogAPI.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StudyDTO {
	private Long id;
	private String title; // 제목
	private String type; // 유형
    private String content; // 리치 텍스트 에디터로 작성된 HTML 내용
}
