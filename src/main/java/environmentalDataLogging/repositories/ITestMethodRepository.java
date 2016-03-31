package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.TestMethod;
import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Test method repository.
 */
@Transactional
public interface ITestMethodRepository extends IBaseRepository<TestMethod>
{
    /**
     * Find by name test method.
     *
     * @param name the name
     * @return the test method
     */
    TestMethod findByName(String name);

}
