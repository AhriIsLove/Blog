package com.al.blogAPI.entity;

import java.time.LocalDateTime;

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
@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
		name = "user_log_seq_generator",
		sequenceName = "user_log_seq",
		initialValue = 1,
		allocationSize = 1
)
public class UserLog {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "user_log_seq_generator"
			)
	private Long id;
	private String ip;// IP
	private String action;// 행동
	private LocalDateTime actionDate;// 행동 시각 
}
