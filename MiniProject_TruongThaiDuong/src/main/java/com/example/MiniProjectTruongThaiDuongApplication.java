package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
//@RestController
public class MiniProjectTruongThaiDuongApplication {

	public static void main(String[] args) {
		SpringApplication.run(MiniProjectTruongThaiDuongApplication.class, args);
	}
//	@GetMapping("/1")
//	public String hehe() {
//		return "hehe";
//	}
}
