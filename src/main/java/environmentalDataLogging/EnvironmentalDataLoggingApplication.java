package environmentalDataLogging;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.embedded.EmbeddedServletContainerCustomizer;
import org.springframework.boot.context.embedded.ErrorPage;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.HttpStatus;
@EnableJpaRepositories("environmentalDataLogging.repositories")
@SpringBootApplication
public class EnvironmentalDataLoggingApplication
{
	/**
	 * The entry point of application.
	 *
	 * @param args the input arguments
	 */
	public static void main(String[] args)
	{
		SpringApplication.run(EnvironmentalDataLoggingApplication.class, args);
	}

	@Bean
	public EmbeddedServletContainerCustomizer containerCustomizer() {

		return (container ->
		{
			ErrorPage error400Page = new ErrorPage(HttpStatus.BAD_REQUEST, "/app/error_pages/400.html");
			ErrorPage error401Page = new ErrorPage(HttpStatus.UNAUTHORIZED, "/app/error_pages/401.html");
			ErrorPage error404Page = new ErrorPage(HttpStatus.NOT_FOUND, "/app/error_pages/404.html");
			ErrorPage error403Page = new ErrorPage(HttpStatus.FORBIDDEN, "/app/error_pages/403.html");
			ErrorPage error500Page = new ErrorPage(HttpStatus.INTERNAL_SERVER_ERROR, "/app/error_pages/500.html");

			container.addErrorPages(error401Page, error404Page, error500Page, error403Page);
		});
	}
}
