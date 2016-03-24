package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.UnitModel;
import environmentalDataLogging.repositories.IUnitRepository;
import environmentalDataLogging.services.interfaces.IUnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UnitService extends CrudService<Unit, UnitModel> implements IUnitService
{
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
