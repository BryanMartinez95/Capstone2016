package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.UserModel;

import java.util.Comparator;
import java.util.List;

public interface IUserService extends ICrudService<User, UserModel>
{
	UserModel findCurrentUser();
	User findByEmail(String email);
	List<SelectListModel> getUserList();
}
