package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Measurement;

import environmentalDataLogging.entities.TestMethod;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * The interface Measurement repository.
 */
@Transactional
public interface IMeasurementRepository extends IBaseRepository<Measurement>
{
    /**
     * Find by date and value and test method measurement.
     *
     * @param date       the date
     * @param value      the value
     * @param testMethod the test method
     * @return the measurement
     */
    Measurement findByDateAndValueAndTestMethod(Date date, Double value, TestMethod testMethod);

    /**
     * Find by sample id order by date asc list.
     *
     * @param id the id
     * @return the list
     */
    List<Measurement> findBySampleIdOrderByDateAsc(UUID id);
}
