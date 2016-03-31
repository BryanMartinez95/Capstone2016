package test.testingTemplates;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/** configuration class used for testing
 *
 */
@EnableAutoConfiguration
//builds in memory database
@ComponentScan(basePackages = { "resources","environmentalDataLogging.services" })
//scans repositories
@EnableJpaRepositories("environmentalDataLogging.repositories")
//scans entities
@EntityScan("environmentalDataLogging.entities")

public class TestContextConfiguration
{

}
