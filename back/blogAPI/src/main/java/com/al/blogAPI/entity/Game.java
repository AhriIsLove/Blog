package com.al.blogAPI.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Data
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
	private String type;// 타입
	private String image;// 이미지
	private String company;// 회사
	private String platform;// 플랫폼
	private LocalDate lastPlayDate;// 마지막 플레이
	private Long playTime;// 플레이타임
	private String review;// 리뷰
	private Long price;// 가격
	private Long buyPrice;// 구매가격

	// 이름 목록
	// 타입 목록
}
