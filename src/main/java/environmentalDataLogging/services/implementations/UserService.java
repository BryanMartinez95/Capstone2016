package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;

import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService extends CrudService<User, UserModel> implements IUserService
{
    @Autowired
    IUserRepository repository;

    public UserModel findCurrentUser()
    {
        UUID uuid = securityService.getCurrentUserId();
        User entity = repository.findOne(uuid);
        return modelMapper.map(entity, UserModel.class);
    }

    public User findByEmail(String email)
    {
        return repository.findByEmail(email);
    }

    public GridResultModel<UserModel> getGridList(GridRequestModel gridRequestModel)
    {
        List<FilterModel> filters = gridRequestModel.getFilters();
        List<SortModel> sorts = gridRequestModel.getSorts();
        List<String> ignoredColumns = gridRequestModel.getIgnoredColumns();

        int pageSize = gridRequestModel.getPageSize();
        int currentPage = gridRequestModel.getCurrentPage();

        GridResultModel<UserModel> gridResultModel = new GridResultModel<>();
        List<UserModel> models = new ArrayList<>();

        List<User> entities = repository.findAll().stream()
                .sorted((user1, user2) -> user1.getFirstName().compareToIgnoreCase(user2.getFirstName()))
                .collect(Collectors.toList());

        for ( User entity : entities )
        {
            models.add(modelMapper.map(entity, UserModel.class));
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
