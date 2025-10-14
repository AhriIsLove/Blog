package com.al.blogAPI.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommonDTO {
	// private CommonId commonId; // 복합키

	private int majorId; // 대분류
	private int middleId; // 중분류
	private int smallId; // 소분류
	
	private String name; // 이름
}
