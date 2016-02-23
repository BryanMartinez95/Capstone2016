package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.Measurement;

import environmentalDataLogging.entities.TestMethod;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Transactional
public interface IMeasurementRepository extends IBaseRepository<Measurement>
{
    Measurement findByDateAndValueAndTestMethod(Date date, Double value, TestMethod testMethod);

}
