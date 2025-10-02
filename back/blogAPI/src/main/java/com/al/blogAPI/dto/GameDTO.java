package com.al.blogAPI.dto;

import java.time.LocalDate;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class GameDTO {
	// Entity
	// private Long id;
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
	
	// 등록용
	MultipartFile imageFile;
	
}
