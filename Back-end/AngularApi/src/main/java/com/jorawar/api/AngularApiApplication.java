package com.jorawar.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.jorawar.model.Users;
import com.jorawar.service.MongoRepo;

@SpringBootApplication
@EnableMongoRepositories("com.jorawar.service")
@ComponentScan("com.jorawar.controller")
public class AngularApiApplication implements CommandLineRunner {
	
	@Autowired
	MongoRepo repo;
	public static void main(String[] args) {
		SpringApplication.run(AngularApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		//Users u1 = new Users("User1", "mymail@mail.com", "street123 delhi");
		//repo.save(u1);
			
		
	}
}

