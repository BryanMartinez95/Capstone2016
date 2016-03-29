package environmentalDataLogging;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableJpaRepositories("environmentalDataLogging.repositories")
@EnableTransactionManagement
@SpringBootApplication
@EnableRedisHttpSession
@EnableScheduling
@EnableAutoConfiguration
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
}
