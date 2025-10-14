package com.al.blogAPI.service;

import java.util.List;

import com.al.blogAPI.dto.CommonDTO;

public interface CommonService {

	void registCommon(CommonDTO commonDTO);

	List<CommonDTO> getCommon(CommonDTO commonDTO);

}
