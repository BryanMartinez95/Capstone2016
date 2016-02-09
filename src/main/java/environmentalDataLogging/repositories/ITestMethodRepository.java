package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.TestMethod;
import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface ITestMethodRepository extends IBaseRepository<TestMethod>
{
    TestMethod findByName(String name);

}
