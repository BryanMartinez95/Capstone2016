package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.UserModel;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.IUserService;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type User service.
 */
@Service
public class UserService extends CrudService<User, UserModel> implements IUserService
{
    /**
     * The Repository.
     */
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

        if (model.getPassword() == null)
        {
            entity.setPassword(repository.findOne(entity.getId()).getPassword());
        }

        repository.saveAndFlush(entity);
    }

    public List<SelectListModel> getUserList()
    {
        List<User> users = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (User User : users)
        {
            models.add(new SelectListModel(User.getFirstName() + " " + User.getLastName(), User.getId()));
        }

        return models;
    }
}
