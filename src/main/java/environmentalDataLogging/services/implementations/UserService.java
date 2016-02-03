package environmentalDataLogging.services.implementations;

import environmentalDataLogging.Helpers.PaginatedArrayList;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
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
		org.springframework.security.core.userdetails.User currentUser =
				(org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		return modelMapper.map(repository.findByEmail(currentUser.getUsername()), UserModel.class);
	}

	public User findByEmail(String email)
	{
		return repository.findByEmail(email);
	}

	public GridResultModel<UserModel> getGridList(GridRequestModel gridRequestModel)
	{
		GridResultModel<UserModel> gridResultModel = new GridResultModel<>();
		List<UserModel> models = new ArrayList<>();

		List<User> entities = repository.findAll().stream()
				.sorted((user1, user2) -> user1.getFirstName().compareToIgnoreCase(user2.getFirstName()))
				.collect(Collectors.toList());

		for (User entity : entities)
		{
			models.add(modelMapper.map(entity, UserModel.class));
		}

		PaginatedArrayList paginatedArrayList = new PaginatedArrayList(models, gridRequestModel.getPageSize());

		paginatedArrayList.gotoPage(gridRequestModel.getCurrentPage() - 1);

		gridResultModel.setCurrentPage(gridRequestModel.getCurrentPage());
		gridResultModel.setLastPage(paginatedArrayList.getLastPageNumber());
		gridResultModel.setPageSize(gridRequestModel.getPageSize());
		gridResultModel.setList(paginatedArrayList);

		return gridResultModel;
	}
}
