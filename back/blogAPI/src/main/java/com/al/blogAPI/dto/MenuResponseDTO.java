package com.al.blogAPI.dto;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
public class MenuResponseDTO<E> {
	private List<E> dtoList;
	private Long maxSubMenuCount;

	@Builder
	public MenuResponseDTO(List<E> dtoList) {
		this.dtoList = dtoList;
		maxSubMenuCount = 0L;

		for (E dto : this.dtoList) {
			if (dto instanceof MenuDTO) {
				maxSubMenuCount = maxSubMenuCount > ((MenuDTO) dto).getSub_menus().size() ? maxSubMenuCount : ((MenuDTO) dto).getSub_menus().size();
			}
		}
	}
}
