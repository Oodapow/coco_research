package ro.upb.userservice.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ro.upb.userservice.entity.User;
import ro.upb.userservice.repository.UserRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {

    private final UserRepository userRepository;

    public Optional<User> findByUsername(String username) {
        var user = userRepository.findByUsername(username);
        user.ifPresentOrElse(u -> log.debug("Found user: {}", u), () -> log.debug("No user found"));
        return userRepository.findByUsername(username);
    }
}
