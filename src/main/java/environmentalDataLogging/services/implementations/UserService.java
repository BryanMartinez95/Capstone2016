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
        UserModel model = modelMapper.map(entity, UserModel.class);

        return model;
    }

    public User findByEmail(String email)
    {
        return repository.findByEmail(email);
    }

    public void update(UserModel model)
    {
        User entity = repository.findOne(model.getId());

        entity.setFirstName(model.getFirstName());
        entity.setLastName(model.getLastName());
        entity.setEmail(model.getEmail());
        entity.setStatus(model.getStatus());
        entity.setRoleType(model.getRoleType());

        beforeUpdate(entity);

        if ( model.getPassword() != null )
        {
            entity.setPassword(model.getPassword());
        }

        repository.saveAndFlush(entity);
    }
}
