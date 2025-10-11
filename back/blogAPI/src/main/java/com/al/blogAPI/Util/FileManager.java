package com.al.blogAPI.Util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class FileManager {

	@Value("${com.al.blogAPI.images.path}")
	private String imagesPath;

	// 실행시 가장먼저 실행
	@PostConstruct
	public void init() {
		File tempFolder = new File(imagesPath);
		if (!tempFolder.exists()) {
			tempFolder.mkdir();
		}
		imagesPath = tempFolder.getAbsolutePath();
	}
	
	// 파일 저장
	public String saveFile(MultipartFile file) {
		// 파일이 없거나 크기가 0이면 null 반환
		if (file == null || file.getSize() == 0) {
			return null;
		}

		// 파일 이름 중복 방지
		String saveName = UUID.randomUUID() + "_" + file.getOriginalFilename();
		System.out.println("CustomFileUtil saveFile saveName => " + file.getOriginalFilename());

		// 저장 경로
		Path savePath = Paths.get(imagesPath, saveName);
		System.out.println("CustomFileUtil saveFile savePath => " + savePath);

		try {
			// 파일 복사
			Files.copy(file.getInputStream(), savePath);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 저장된 파일 이름 반환
		return saveName;
	}

	// 파일 가져오기
	public ResponseEntity<Resource> getFile(String fileName) {
		// 저장된 파일 경로 + 파일명
		Resource resource = new FileSystemResource(imagesPath + File.separator + fileName);

		System.out.println("ResponseEntity<Resource> getFile => " + imagesPath + File.separator + fileName);

		if (!resource.exists()) {
			// File.separator --> os에 맞는 경로 구분자
			// 요청 파일 없으면 default.jpeg 보여줘
			resource = new FileSystemResource(imagesPath + File.separator + "default.jpg");
		}
		// 응답 Header 생성후 Content-Type 적용
		HttpHeaders headers = new HttpHeaders();

		try {
			headers.add("Content-Type", Files.probeContentType(resource.getFile().toPath()));
		} catch (Exception e) {
			return ResponseEntity.internalServerError().build();
		}
		// 최종적 : 200 상태코드 + 응답 Header + 파일 Resource 전달
		// 주요 목적 : File D/L 또는 Image 보여줄때
		return ResponseEntity.ok().headers(headers).body(resource);
	}

	// 파일 삭제
	public void deleteFile(String fileName) {
		if (fileName == null || fileName == "") {
			return;
		}
		// 파일명
		Path filePath = Paths.get(imagesPath, fileName);
		
		// System.out.println("filePath" + filePath);
		
		try {
			// 파일 삭제
			Files.deleteIfExists(filePath);
		} catch (IOException e) {
			throw new RuntimeException(e.getMessage());
		}
	}
}
