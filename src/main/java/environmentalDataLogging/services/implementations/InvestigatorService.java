package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.Investigator;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.InvestigatorModel;
import environmentalDataLogging.repositories.IInvestigatorRepository;
import environmentalDataLogging.services.interfaces.IInvestigatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

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

    public GridResultModel<InvestigatorModel> getGridList(GridRequestModel gridRequestModel)
    {
        List<FilterModel> filters = gridRequestModel.getFilters();
        List<SortModel> sorts = gridRequestModel.getSorts();
        List<String> ignoredColumns = new ArrayList<>();

        ignoredColumns.add("id");
        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<InvestigatorModel> gridResultModel = new GridResultModel<>();
        List<InvestigatorModel> models = new ArrayList<>();

        List<Investigator> entities = repository.findAll().stream()
                .sorted((investigator1, investigator2) -> investigator1.getName().compareToIgnoreCase(investigator2.getName()))
                .collect(Collectors.toList());

        for (Investigator entity : entities)
        {
            InvestigatorModel model = new InvestigatorModel();
            model.setId(entity.getId());
            model.setName(entity.getName());
            model.setPhoneNumber(entity.getPhoneNumber());
            model.setEmail(entity.getEmail());
            model.setStatus(entity.getStatus());
            model.setComment(entity.getComment());
            models.add(model);
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
}
