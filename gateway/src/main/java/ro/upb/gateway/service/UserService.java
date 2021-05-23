package ro.upb.gateway.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import ro.upb.gateway.model.User;
import ro.upb.gateway.model.UserWithoutIdModel;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final RestTemplate restTemplate;

    public Optional<User> findByUsername(String username) {
        var user = restTemplate
                .getForObject("http://localhost:8081/api/user-service/user/{username}", User.class, username);
        return Optional.ofNullable(user);
    }

    public boolean createNewUser(String username, String encryptedPassword) {
        HttpEntity<UserWithoutIdModel> request = new HttpEntity<>(new UserWithoutIdModel(username, encryptedPassword));
        var user = restTemplate
                .postForObject("http://localhost:8081/api/user-service/user/register", request, User.class);
        return true;
    }
}
