package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Sample;

import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

/**
 * The interface Sample repository.
 */
@Transactional
public interface ISampleRepository extends IBaseRepository<Sample>
{
    /**
     * Find by lab id sample.
     *
     * @param labId the lab id
     * @return the sample
     */
    Sample findByLabId(String labId);

    /**
     * Find by project id list.
     *
     * @param id the id
     * @return the list
     */
    List<Sample> findByProjectId(UUID id);

    /**
     * Find by device id list.
     *
     * @param id the id
     * @return the list
     */
    List<Sample> findByDeviceId(UUID id);
}
