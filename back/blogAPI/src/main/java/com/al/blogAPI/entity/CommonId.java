package com.al.blogAPI.entity;

import java.io.Serializable;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class CommonId implements Serializable {
	private int majorId; // 대분류
	private int middleId; // 중분류
	private int smallId; // 소분류
}
