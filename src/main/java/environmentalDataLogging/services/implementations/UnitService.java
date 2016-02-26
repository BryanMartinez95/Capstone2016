package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
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
        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<UnitModel> gridResultModel = new GridResultModel<>();
        List<UnitModel> models = new ArrayList<>();

        List<Unit> entities = repository.findAll().stream()
                .sorted((unit1, unit2) -> unit1.getName().compareToIgnoreCase(unit2.getName()))
                .collect(Collectors.toList());

        for ( Unit entity : entities )
        {
            models.add(modelMapper.map(entity, UnitModel.class));
        }

        PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, pageSize);

        paginatedArrayList.gotoPage(currentPage - 1);

        gridResultModel.setCurrentPage(currentPage);
        gridResultModel.setLastPage(paginatedArrayList.getLastPageNumber());
        gridResultModel.setPageSize(pageSize);
        gridResultModel.setList(paginatedArrayList);

        return gridResultModel;
    }
}
