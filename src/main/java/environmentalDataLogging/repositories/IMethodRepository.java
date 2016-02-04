package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Method;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IMethodRepository extends IBaseRepository<Method>
{
    Method findByName(String name);

}
