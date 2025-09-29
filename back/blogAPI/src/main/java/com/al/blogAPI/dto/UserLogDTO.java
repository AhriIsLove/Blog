package com.al.blogAPI.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserLogDTO {
	// private Long id;
	private String ip;// IP
	private String action;// 행동
	private LocalDateTime actionDate;// 행동 시각
}
