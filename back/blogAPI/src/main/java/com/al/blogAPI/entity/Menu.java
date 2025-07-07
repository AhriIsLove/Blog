package com.al.blogAPI.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Menu {
	@Id
	private Long id;
	private String name;
	private String link;
	private Long parent_id;
	
	// 1:N 종속
	// mappedBy = "TableName" : 맵핑
	// cascade = CascadeType.ALL : 삭제시 종속된 자식 테이블에서도 삭제
	// orphanRemoval = true : cascade DB반영 여부
	@OneToMany(mappedBy = "menu", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Search> search;
}
