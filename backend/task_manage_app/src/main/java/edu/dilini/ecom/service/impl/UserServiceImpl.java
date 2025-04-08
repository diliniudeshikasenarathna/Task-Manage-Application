package edu.dilini.ecom.service.impl;

import edu.dilini.ecom.dto.User;
import edu.dilini.ecom.entity.UserEntity;
import edu.dilini.ecom.repository.UserRepository;
import edu.dilini.ecom.service.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {


    final UserRepository userRepository;
    final ModelMapper mapper;


    @Override
    public void registerUser(User user) {
        userRepository.save(mapper.map(user, UserEntity.class));

    }
}
