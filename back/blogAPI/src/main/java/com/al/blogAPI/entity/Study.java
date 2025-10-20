package com.al.blogAPI.entity;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
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
			generator = "study_seq_generator"
			)
	private Long id;
	private String title; // 제목
	private String type; // 유형
	@Lob // 대용량 텍스트 데이터를 위한 어노테이션
    @Column(columnDefinition = "CLOB") // Oracle 기준, MySQL은 LONGTEXT, H2는 TEXT 등으로 바꿔줘야 함
    private String content; // 리치 텍스트 에디터로 작성된 HTML 내용
	
	@Builder.Default // 빌더 초기화 오류(null) 방지
	@OneToMany(mappedBy = "study", cascade = CascadeType.ALL/*모든 JPA실행시 관계도 실행되도록*/, orphanRemoval = true/*삭제 무결성 보완*/)
	private List<StudyTag> tags = new ArrayList<>();// 태그
    public void addTag(StudyTag tag) {
        this.tags.add(tag);
        tag.setStudy(this); // 양방향 연관관계 설정 시 필수!
    }
    public void removeTag(StudyTag tag) {
        this.tags.remove(tag);
        tag.setStudy(null); // 양방향 연관관계 해제
    }
}
