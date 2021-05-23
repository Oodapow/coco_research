package ro.upb.userservice.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ro.upb.userservice.entity.User;
import ro.upb.userservice.model.UserRegistrationModel;
import ro.upb.userservice.service.UserService;

@RestController
@RequiredArgsConstructor
@RequestMapping("user")
@Slf4j
public class UserController {

    private final UserService userService;

    @GetMapping("{username}")
    public @ResponseBody
    User getUserByUsername(@PathVariable final String username) {
        log.debug("Getting User for {}", username);
        return userService.findByUsername(username).orElse(null);
    }

    @PostMapping("register")
    public @ResponseBody
    User getUserByUsername(@RequestBody final UserRegistrationModel userRegistrationModel) {
        log.debug("Register new User with username {}", userRegistrationModel.getUsername());
        return userService.createNewUser(userRegistrationModel.getUsername(), userRegistrationModel.getPassword());
    }
}
