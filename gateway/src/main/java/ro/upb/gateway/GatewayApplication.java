package ro.upb.gateway;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories
public class GatewayApplication {
	@Value("${query.service.url}")
	String queryServiceUrl;
	@Value("${tagging.service.url}")
	String taggingServiceUrl;
	@Value("${user.service.url}")
	String userServiceUrl;
	@Value("${user.interface.url}")
	String userInterfaceUrl;

	public static void main(String[] args) {
		SpringApplication.run(GatewayApplication.class, args);
	}

	@Bean
	public RouteLocator myRoutes(RouteLocatorBuilder builder) {
		return builder.routes()
				.route(p -> p.path("/api/query-service/**")
						.filters(f -> f.rewritePath("/api/query-service/(?<PATH>.*)", "/api/query-service/${PATH}"))
						.uri(queryServiceUrl))
				.route(p -> p.path("/api/tagging-service/**")
						.filters(f -> f.rewritePath("/api/tagging-service/(?<PATH>.*)", "/api/tagging-service/${PATH}"))
						.uri(taggingServiceUrl))
				.route(p -> p.path("/api/user-service/**")
						.filters(f -> f.rewritePath("/api/user-service/(?<PATH>.*)", "/api/user-service/${PATH}"))
						.uri(userServiceUrl))
				.route(p -> p.path( "/**").uri(userInterfaceUrl))
				.build();
	}
}
