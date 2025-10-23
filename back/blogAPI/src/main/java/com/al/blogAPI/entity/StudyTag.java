package com.al.blogAPI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
		name = "studytag_seq_generator",
		sequenceName = "studytag_seq",
		initialValue = 1,
		allocationSize = 1
)
public class StudyTag {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "studytag_seq_generator"
			)
	private Long id;
	private String tag;//태그
	
	// Study Entity와 연관관계 설정 (ManyToOne)
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "study_id") // 외래 키 컬럼 이름
	private Study study;//공부
    // 추가: 태그명과 공부을 받는 생성자
    public StudyTag(String tag, Study study) {
        this.tag = tag;
        this.study = study;
    }
}
