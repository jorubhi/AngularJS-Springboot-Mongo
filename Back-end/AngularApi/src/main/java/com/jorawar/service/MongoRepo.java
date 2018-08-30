package com.jorawar.service;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.jorawar.model.Users;

@Repository
public interface MongoRepo extends MongoRepository<Users, String > {

}
