package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Unit;

import org.springframework.transaction.annotation.Transactional;

@Transactional
public interface IUnitRepository extends IBaseRepository<Unit>
{
    Unit findByName(String name);
}
