package environmentalDataLogging.services;

import environmentalDataLogging.entities.SampleIdentifier;
import environmentalDataLogging.repositories.*;
import org.modelmapper.ModelMapper;
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
    SampleIdentifierRepository sampleIdentifierRepository;

    /**
     * The Sample repository.
     */
    @Autowired
    SampleRepository sampleRepository;

    /**
     * The Substance repository.
     */
    @Autowired
    MethodRepository methodRepository;

    /**
     * The Unit of measure repository.
     */
    @Autowired
    UnitRepository unitRepository;

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

    @Autowired
    ModelMapper modelMapper;
}
