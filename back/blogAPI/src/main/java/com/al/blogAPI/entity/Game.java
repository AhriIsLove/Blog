package com.al.blogAPI.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
		name = "game_seq_generator",
		sequenceName = "game_seq",
		initialValue = 1,
		allocationSize = 1
)
public class Game {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "game_seq_generator"
			)
	private Long id;
	private String name;//이름
	@Column(nullable = false, columnDefinition = "")
	private String type;// 타입
	private String image;// 이미지
	private String company;// 회사
	@Column(nullable = false, columnDefinition = "")
	private String platform;// 플랫폼
	private LocalDate lastPlayDate;// 마지막 플레이
	private Long playTime;// 플레이타임
	@Column(length = 1000)
	private String review;// 리뷰
	private Long price;// 가격
	private Long buyPrice;// 구매가격
	
	@Builder.Default // 빌더 초기화 오류(null) 방지
	@OneToMany(mappedBy = "game", cascade = CascadeType.ALL/*모든 JPA실행시 관계도 실행되도록*/, orphanRemoval = true/*삭제 무결성 보완*/)
	private List<GameTag> tags = new ArrayList<>();// 태그
    public void addTag(GameTag tag) {
        this.tags.add(tag);
        tag.setGame(this); // 양방향 연관관계 설정 시 필수!
    }
    public void removeTag(GameTag tag) {
        this.tags.remove(tag);
        tag.setGame(null); // 양방향 연관관계 해제
    }
}
