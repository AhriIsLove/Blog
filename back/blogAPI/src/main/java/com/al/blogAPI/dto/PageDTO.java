package com.al.blogAPI.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PageDTO {
	List<?> items;
	int totalCount;
	int currentPage;
	int totalPages;
}
