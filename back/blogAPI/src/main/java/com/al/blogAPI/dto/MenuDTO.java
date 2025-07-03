package com.al.blogAPI.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MenuDTO {
	//Entity 속성들
	private Long id;
	private String name;
	private Long parent_id;
	
	//DTO 추가 속성들
	@Builder.Default
	private List<MenuDTO> sub_menus = new ArrayList<>();
}
