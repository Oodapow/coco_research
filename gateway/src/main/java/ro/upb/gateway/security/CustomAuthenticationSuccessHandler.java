package ro.upb.gateway.security;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {
        String hashPart = request.getParameter("hashPart");
        if (hashPart == null || hashPart.isBlank()) {
            super.onAuthenticationSuccess(request, response, authentication);
        } else {
            this.getRedirectStrategy().sendRedirect(request, response, "/" + hashPart);
        }
    }
}
