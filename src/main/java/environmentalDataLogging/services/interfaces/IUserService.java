package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;

import java.util.UUID;

public interface IUserService extends ICrudService<User, UserModel, UUID>
{
}
