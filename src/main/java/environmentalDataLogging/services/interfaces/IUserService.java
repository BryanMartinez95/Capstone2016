package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;

public interface IUserService extends ICrudService<User, UserModel>
{
	UserModel findCurrentUser();
	User findByEmail(String email);
}
