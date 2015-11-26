package environmentalDataLogging.services;

import environmentalDataLogging.models.UserModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService extends BaseService
{
    public void delete(UUID id)
    {
    }

    public void update(UserModel model)
    {

    }

    public UserModel findOne(UUID id)
    {
        return null;
    }

    public void create(UserModel model)
    {

    }

    public List<UserModel> findAll()
    {
        return null;
    }
}
