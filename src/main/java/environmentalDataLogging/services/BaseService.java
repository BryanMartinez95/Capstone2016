package environmentalDataLogging.services;

import environmentalDataLogging.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Base service - All services extend BaseService.  BaseService autowires the repositories
 * with dependency injection.  Any class extending BaseService will have access to the repositories
 */
@Service
public class BaseService
{
    /**
     * The Client repository.
     */
    @Autowired
    ClientRepository clientRepository;

    /**
     * The Device repository.
     */
    @Autowired
    DeviceRepository deviceRepository;

    /**
     * The Location repository.
     */
    @Autowired
    LocationRepository locationRepository;

    /**
     * The Measurement repository.
     */
    @Autowired
    MeasurementRepository measurementRepository;

    /**
     * The Project repository.
     */
    @Autowired
    ProjectRepository projectRepository;

    /**
     * The Project id repository.
     */
    @Autowired
    ProjectIdRepository projectIdRepository;

    /**
     * The Sample repository.
     */
    @Autowired
    SampleRepository sampleRepository;

    /**
     * The Substance repository.
     */
    @Autowired
    SubstanceRepository substanceRepository;

    /**
     * The Unit of measure repository.
     */
    @Autowired
    UnitOfMeasureRepository unitOfMeasureRepository;

    /**
     * The User repository.
     */
    @Autowired
    UserRepository userRepository;

    /**
     * The Investigator repository.
     */
    @Autowired
    InvestigatorRepository investigatorRepository;
}
