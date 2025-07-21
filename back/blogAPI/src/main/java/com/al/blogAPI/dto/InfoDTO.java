package com.al.blogAPI.dto;

import java.time.LocalDate;

import com.al.blogAPI.entity.InfoId;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class InfoDTO {
	private InfoId infoId;
	
	private String e_name;
	private String c_name;
	private int age;
	private LocalDate birth;
	
	private String profile;
	
	private String address;
	private String email;
	private String tel;
	private String link_youtube;
}
