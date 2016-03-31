package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Unit;

import org.springframework.transaction.annotation.Transactional;

/**
 * The interface Unit repository.
 */
@Transactional
public interface IUnitRepository extends IBaseRepository<Unit>
{
    /**
     * Find by name unit.
     *
     * @param name the name
     * @return the unit
     */
    Unit findByName(String name);
}
