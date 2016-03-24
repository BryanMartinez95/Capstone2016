package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Investigator;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.InvestigatorModel;
import environmentalDataLogging.repositories.IInvestigatorRepository;
import environmentalDataLogging.services.interfaces.IInvestigatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Investigator service provides all of the required methods for the investigator controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class InvestigatorService extends CrudService<Investigator, InvestigatorModel> implements IInvestigatorService
{
    @Autowired
    IInvestigatorRepository repository;

    public List<SelectListModel> getInvestigatorList()
    {
        List<Investigator> investigators = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (Investigator investigator : investigators)
        {
            models.add(new SelectListModel(investigator.getName(), investigator.getId()));
        }

        return models;
    }
}
