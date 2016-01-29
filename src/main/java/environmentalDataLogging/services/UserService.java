package environmentalDataLogging.services;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.grids.UserGridModel;
import environmentalDataLogging.models.views.UserModel;
import org.springframework.stereotype.Service;

@Service
public class UserService extends CrudService<User, UserModel, UserGridModel>
{
//	@Autowired
//	BaseRepository<User, UUID> userRepository;
//
//	public UserModel findCurrentUser()
//	{
//		org.springframework.security.core.userdetails.User currentUser =  ( org.springframework.security.core.userdetails.User ) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//
//		return modelMapper.map(userRepository.findByEmail(currentUser.getUsername()), UserModel.class);
//	}
//
	public User findByEmail(String email)
	{
		return repository.findByEmail(email);
	}
}
