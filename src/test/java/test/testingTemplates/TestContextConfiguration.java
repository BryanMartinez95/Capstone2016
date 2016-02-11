package test.testingTemplates;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by 631152 on 2/10/2016.
 */

@EnableAutoConfiguration
@ComponentScan(basePackages = { "resources" })
@EnableJpaRepositories("environmentalDataLogging.repositories")
@EntityScan("environmentalDataLogging.entities")
public class TestContextConfiguration
{

}
