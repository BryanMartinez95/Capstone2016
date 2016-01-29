package environmentalDataLogging.services;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.grids.UserGridModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * User service provides all of the required methods for the user controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class UserService extends CrudService<User, UserModel, UserGridModel, UUID>
{
	@Autowired
	BaseRepository<User, UUID> userRepository;

	public UserModel findCurrentUser()
	{
		org.springframework.security.core.userdetails.User currentUser =  ( org.springframework.security.core.userdetails.User ) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		return modelMapper.map(userRepository.findByEmail(currentUser.getUsername()), UserModel.class);
	}

	public User findByEmail(String email)
	{
		return userRepository.findByEmail(email);
	}
}
