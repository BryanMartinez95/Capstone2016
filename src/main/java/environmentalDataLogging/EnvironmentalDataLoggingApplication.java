package environmentalDataLogging;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * The Environmental data logging application.  The application is a spring boot application running
 * on a test port of 5555
 */
@SpringBootApplication
public class EnvironmentalDataLoggingApplication {

    /**
     * The entry point of application.
     *
     * @param args the input arguments
     */
    public static void main(String[] args) {
        SpringApplication.run(EnvironmentalDataLoggingApplication.class, args);
    }
}
