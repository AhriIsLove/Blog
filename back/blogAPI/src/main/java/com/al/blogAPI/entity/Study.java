package com.al.blogAPI.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
		name = "study_seq_generator",
		sequenceName = "study_seq",
		initialValue = 1,
		allocationSize = 1
)
public class Study {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "game_seq_generator"
			)
	private Long id;
	private String title; // 제목
	private String type; // 유형
	@Lob // 대용량 텍스트 데이터를 위한 어노테이션
    @Column(columnDefinition = "CLOB") // Oracle 기준, MySQL은 LONGTEXT, H2는 TEXT 등으로 바꿔줘야 함
    private String content; // 리치 텍스트 에디터로 작성된 HTML 내용
	
	// 태그들
}
