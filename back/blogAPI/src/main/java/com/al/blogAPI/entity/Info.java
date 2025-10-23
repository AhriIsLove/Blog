package com.al.blogAPI.entity;

import java.time.LocalDate;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
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
public class Info {
	@EmbeddedId
	private InfoId infoId;
//	private boolean pri;
//	private String name;
	
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
