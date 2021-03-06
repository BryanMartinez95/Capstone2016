package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.UnitModel;
import environmentalDataLogging.repositories.IUnitRepository;
import environmentalDataLogging.services.interfaces.IUnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * The type Unit service.
 */
@Service
public class UnitService extends CrudService<Unit, UnitModel> implements IUnitService
{
    /**
     * The Repository.
     */
    @Autowired
    IUnitRepository repository;

    public List<SelectListModel> getUnitList()
    {
        List<Unit> units = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (Unit unit : units)
        {
            models.add(new SelectListModel(unit.getName(), unit.getId()));
        }

        return models;
    }
}
