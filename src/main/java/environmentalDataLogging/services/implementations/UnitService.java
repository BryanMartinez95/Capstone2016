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

    public GridResultModel<UnitModel> getGridList(GridRequestModel gridRequestModel)
    {
        List<FilterModel> filters = gridRequestModel.getFilters();
        List<SortModel> sorts = gridRequestModel.getSorts();
        List<String> ignoredColumns = gridRequestModel.getIgnoredColumns();

        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<UnitModel> gridResultModel = new GridResultModel<>();
        List<UnitModel> models = new ArrayList<>();

        List<Unit> entities = repository.findAll().stream()
                .sorted((unit1, unit2) -> unit1.getName().compareToIgnoreCase(unit2.getName()))
                .collect(Collectors.toList());

        for (Unit entity : entities)
        {
            models.add(modelMapper.map(entity, UnitModel.class));
        }

        PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);

        paginatedArrayList.gotoPage(currentPage - 1);

        gridResultModel.setCurrentPage(currentPage);
        gridResultModel.setPageSize(pageSize);
        gridResultModel.setList(paginatedArrayList);
        gridResultModel.setIgnoredColumns(ignoredColumns);
        gridResultModel.setTotalItems(models.size());

        return gridResultModel;
    }

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
