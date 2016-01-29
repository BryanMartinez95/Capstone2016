package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.services.interfaces.IUserService;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService extends CrudService<User, UserModel,  UUID> implements IUserService
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
//	public User findByEmail(String email)
//	{
////		return repository.findByEmail(email);
//		return new User();
//	}
}
