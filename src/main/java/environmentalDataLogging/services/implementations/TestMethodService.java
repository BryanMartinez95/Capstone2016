package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.TestMethodModel;

import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.services.interfaces.ITestMethodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TestMethodService extends CrudService<TestMethod, TestMethodModel> implements ITestMethodService
{
    @Autowired
    ITestMethodRepository repository;

    public List<SelectListModel> getTestMethodList()
    {
        List<TestMethod> testMethods = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (TestMethod testMethod : testMethods)
        {
            models.add(new SelectListModel(testMethod.getName(), testMethod.getId()));
        }

        return models;
    }
}
