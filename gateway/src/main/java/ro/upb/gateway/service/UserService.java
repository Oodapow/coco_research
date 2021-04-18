package ro.upb.gateway.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ro.upb.gateway.model.User;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final RestTemplate restTemplate;

    public Optional<User> findByUsername(String username) {
        var user = restTemplate
                .getForObject("http://localhost:8091/api/user-service/user/{username}", User.class, username);
        return Optional.ofNullable(user);
    }
}
