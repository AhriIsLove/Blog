package com.al.blogAPI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
		name = "search_seq_generator",
		sequenceName = "search_seq",
		initialValue = 1,
		allocationSize = 1
)
public class Search {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "search_seq_generator"
			)
	private Long id;
	private String keyword;
	
	@ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "menu_id") // 외래 키 컬럼명 지정
	private Menu menu;
}
