package ro.upb.gateway.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.core.env.Environment;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.header.writers.frameoptions.XFrameOptionsHeaderWriter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig {

    @Configuration
    @Order(1)
    @RequiredArgsConstructor
    public static class ApiWebSecurityConfig extends WebSecurityConfigurerAdapter {

        private final BCryptPasswordEncoder encoder;
        private final Environment environment;

        @Override
        protected void configure(AuthenticationManagerBuilder auth) throws Exception {
            auth.inMemoryAuthentication()
                    .withUser(environment.getProperty("resttemplate.username"))
                    .password(encoder.encode(environment.getProperty("resttemplate.password")))
                    .roles("API");
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable()
                    .antMatcher("/api/**")
                    .authorizeRequests()
                    .anyRequest().hasAnyRole("ADMIN", "API")
                    .and()
                    .httpBasic();
        }
    }

    @Configuration
    @Order(2)
    @RequiredArgsConstructor
    public static class FormWebSecurityConfig extends WebSecurityConfigurerAdapter {

        private final CustomAuthenticationProvider customAuthenticationProvider;

        @Override
        protected void configure(AuthenticationManagerBuilder auth) {
            auth.authenticationProvider(customAuthenticationProvider);
        }

        @Override
        public void configure(WebSecurity web) {
            web.ignoring().antMatchers("/js/**", "/css/**", "/image/**", "/vendor/**", "/fonts/**");
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.csrf().disable().headers().frameOptions().sameOrigin().addHeaderWriter(
                    new XFrameOptionsHeaderWriter(XFrameOptionsHeaderWriter.XFrameOptionsMode.SAMEORIGIN));
            http
                    .authorizeRequests()
                    .antMatchers("/js/**", "/css/**", "/image/**", "/vendor/**", "/fonts/**").permitAll()
                    .anyRequest().authenticated()
                    .and()
                    .formLogin()
                    .loginPage("/login").permitAll()
                    .failureUrl("/login?error=true")
                    .defaultSuccessUrl("/")
                    .and()
                    .logout()
                    .permitAll();
        }
    }
}
