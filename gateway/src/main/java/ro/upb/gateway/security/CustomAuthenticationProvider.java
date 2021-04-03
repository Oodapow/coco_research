package ro.upb.gateway.security;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import ro.upb.gateway.entity.User;
import ro.upb.gateway.repository.UserRepository;

import java.util.Optional;

@Component(value = "customAuthenticationProvider")
@RequiredArgsConstructor
public class CustomAuthenticationProvider implements AuthenticationProvider {

    private static final String CREDENTIALS_MESSAGE_ERROR = "Invalid credentials!";

    private final BCryptPasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        return new UsernamePasswordAuthenticationToken(verifyCredentials(authentication), authentication, null);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

    private User verifyCredentials(final Authentication authentication) {
        final String authPassword = authentication.getCredentials().toString().trim();
        final Optional<User> userOptional = userRepository.findByUsername(authentication.getName().trim());

        if (userOptional.isPresent()) {
            final User user = userOptional.get();
            if (passwordEncoder.matches(authPassword, user.getPassword())) {
                return user;
            }
        }
        throw new BadCredentialsException(CREDENTIALS_MESSAGE_ERROR);
    }
}
