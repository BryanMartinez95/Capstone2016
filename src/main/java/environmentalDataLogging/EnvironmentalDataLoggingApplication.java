package environmentalDataLogging;

import environmentalDataLogging.services.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * The Environmental data logging application.  The application is a spring boot application running
 * on a test port of 5555
 */
@SpringBootApplication
@EnableJpaRepositories(basePackages = "environmentalDataLogging.repositories")
public class EnvironmentalDataLoggingApplication {

    @Autowired
    SeedService seedService;
    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(EnvironmentalDataLoggingApplication.class, args);


    }
}
