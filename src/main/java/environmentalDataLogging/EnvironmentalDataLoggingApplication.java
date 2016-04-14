package environmentalDataLogging;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * The type Environmental data logging application.
 */
@EnableJpaRepositories("environmentalDataLogging.repositories")
@EnableTransactionManagement
@SpringBootApplication
@EnableRedisHttpSession(maxInactiveIntervalInSeconds = Integer.MAX_VALUE)
@EnableScheduling
@EnableGlobalMethodSecurity(prePostEnabled = true)
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
