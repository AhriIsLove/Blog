package com.al.blogAPI.service;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.al.blogAPI.dto.InfoDTO;
import com.al.blogAPI.entity.Info;
import com.al.blogAPI.entity.InfoId;
import com.al.blogAPI.repository.InfoRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class IntroductionServiceImpl implements IntroductionService {
	private final InfoRepository infoRepository;
	
	@Override
	public InfoDTO getInfo() {
		InfoId infoId = new InfoId(false, "안도건");
		System.out.println(infoId);
		
		Info info = infoRepository.findById(infoId).orElseThrow(() -> new RuntimeException("정보가 없습니다."));
		System.out.println(info);

		ModelMapper mapper = new ModelMapper();
		InfoDTO infoDTO = mapper.map(info, InfoDTO.class);
		
		return infoDTO;
	}

}
