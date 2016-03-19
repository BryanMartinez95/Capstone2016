package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.TestMethodModel;

import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.services.interfaces.ITestMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TestMethodService extends CrudService<TestMethod, TestMethodModel> implements ITestMethodService
{
    @Autowired
    ITestMethodRepository repository;

    @Autowired
    IDeviceRepository deviceRepository;

}
