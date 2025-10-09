package com.al.blogAPI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@SequenceGenerator(
		name = "gametag_seq_generator",
		sequenceName = "gametag_seq",
		initialValue = 1,
		allocationSize = 1
)
public class GameTag {
	@Id
	@GeneratedValue(
			strategy = GenerationType.SEQUENCE,
			generator = "gametag_seq_generator"
			)
	private Long id;
	private String tag;//태그
	
	// Game Entity와 연관관계 설정 (ManyToOne)
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "game_id") // 외래 키 컬럼 이름
	private Game game;//게임 id
    // 추가: 태그명과 게임을 받는 생성자
    public GameTag(String tag, Game game) {
        this.tag = tag;
        this.game = game;
    }
}
