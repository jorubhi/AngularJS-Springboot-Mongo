package com.jorawar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.jorawar.model.Users;
import com.jorawar.service.MongoRepo;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/api")
@CrossOrigin({"http://localhost:8081","http://localhost:8100"})

public class RestController {
	@Autowired
	MongoRepo repo;

	@GetMapping("/all")
	public java.util.List<Users> allRecords() {

		return repo.findAll();
	}

	@PostMapping
	public void saveUser(@RequestBody Users u) {
		if (u != null)
			repo.save(u);
		
		//return u.getId();
	}

	@DeleteMapping
	public void deleteuser(@RequestParam String dl) {

		repo.deleteById(dl);
	}

	@GetMapping("/delete")
	public void deleteUser(@RequestParam String Id) {

		repo.deleteById(Id);

	}

}
