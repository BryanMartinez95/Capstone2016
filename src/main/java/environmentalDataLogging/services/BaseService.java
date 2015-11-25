package environmentalDataLogging.services;

import environmentalDataLogging.entities.Substance;
import environmentalDataLogging.repositories.ClientRepository;
import environmentalDataLogging.repositories.DeviceRepository;
import environmentalDataLogging.repositories.LocationRepository;
import environmentalDataLogging.repositories.MeasurementRepository;
import environmentalDataLogging.repositories.ProjectIdRepository;
import environmentalDataLogging.repositories.ProjectRepository;
import environmentalDataLogging.repositories.SampleRepository;
import environmentalDataLogging.repositories.SubstanceRepository;
import environmentalDataLogging.repositories.UnitOfMeasureRepository;
import environmentalDataLogging.repositories.UserRepository;
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
    ProjectIdRepository projectIdRepository;

    @Autowired
    SampleRepository sampleRepository;

    @Autowired
    SubstanceRepository substanceRepository;

    @Autowired
    UnitOfMeasureRepository unitOfMeasureRepository;

    @Autowired
    UserRepository userRepository;
}
