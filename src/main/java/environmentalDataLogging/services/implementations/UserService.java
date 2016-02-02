package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

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
}
