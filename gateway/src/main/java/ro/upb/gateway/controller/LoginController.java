package ro.upb.gateway.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;
import ro.upb.gateway.model.UserSignupModel;
import ro.upb.gateway.service.UserService;

@Controller
@RequiredArgsConstructor
@Slf4j
public class LoginController {

    private final UserService userService;
    private final BCryptPasswordEncoder encoder;

    @GetMapping("/login")
    public String login() {
        return "index";
    }

    @GetMapping("/signup")
    public String signup() {
        return "register";
    }

    @PostMapping("/signup")
    public ModelAndView signupProcess(UserSignupModel userSignupModel) {
        if (userService.findByUsername(userSignupModel.getUsername()).isPresent()) {
            return new ModelAndView("register", "error", "Username already taken!");
        }
        if (!userSignupModel.getPassword().equals(userSignupModel.getConfirmPassword())) {
            return new ModelAndView("register", "error", "Passwords do not match!");
        }
        var encryptedPassword = encoder.encode(userSignupModel.getPassword());
        userService.createNewUser(userSignupModel.getUsername(), encryptedPassword);
        return new ModelAndView("index", "msg", "Account created successfully!");
    }

    @GetMapping("/")
    public String root() {
        return "indexRoot";
    }
}
