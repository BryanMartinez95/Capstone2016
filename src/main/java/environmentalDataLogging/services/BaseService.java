package environmentalDataLogging.services;

import environmentalDataLogging.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BaseService
{
    @Autowired
    ClientRepository clientRepository;

    @Autowired
    DeviceRepository deviceRepository;

    @Autowired
    LocationRepository locationRepository;

    @Autowired
    MeasurementRepository measurementRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    SampleIdRepository sampleIdRepository;

    @Autowired
    SampleRepository sampleRepository;

    @Autowired
    SubstanceRepository substanceRepository;

    @Autowired
    UnitOfMeasureRepository unitOfMeasureRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    InvestigatorRepository investigatorRepository;
}
