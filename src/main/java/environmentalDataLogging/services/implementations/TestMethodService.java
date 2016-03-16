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

    public GridResultModel<TestMethodModel> getGridList(GridRequestModel gridRequestModel)
    {
        List<FilterModel> filters = gridRequestModel.getFilters();
        List<SortModel> sorts = gridRequestModel.getSorts();
        List<String> ignoredColumns = gridRequestModel.getIgnoredColumns();

        ignoredColumns.add("id");
        ignoredColumns.add("deviceId");
        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<TestMethodModel> gridResultModel = new GridResultModel<>();
        List<TestMethodModel> models = new ArrayList<>();

        List<TestMethod> entities = repository.findAll().stream()
                .sorted((unit1, unit2) -> unit1.getName().compareToIgnoreCase(unit2.getName()))
                .collect(Collectors.toList());

        for (TestMethod entity : entities)
        {
            TestMethodModel model = new TestMethodModel();
            model.setId(entity.getId());
            model.setDeviceId(entity.getDevice().getId());
            model.setName(entity.getName());
            model.setDeviceName(entity.getDevice().getName());

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
