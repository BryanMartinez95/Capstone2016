package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;

import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    @Override
    public void update(UserModel model)
    {
        User entity = modelMapper.map(model, entityClass);
        beforeUpdate(entity);

        if ( model.getPassword() == null )
        {
            entity.setPassword(repository.findOne(entity.getId()).getPassword());
        }

        repository.saveAndFlush(entity);
    }
}
