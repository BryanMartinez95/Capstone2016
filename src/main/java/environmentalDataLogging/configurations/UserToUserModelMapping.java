package environmentalDataLogging.configurations;


import com.github.jmnarloch.spring.boot.modelmapper.PropertyMapConfigurerSupport;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;
import org.modelmapper.PropertyMap;
import org.springframework.stereotype.Component;

@Component
public class UserToUserModelMapping extends PropertyMapConfigurerSupport<User, UserModel>
{
    @Override
    public PropertyMap<User, UserModel> mapping()
    {
        return new PropertyMap<User, UserModel>()
        {
            @Override
            protected void configure()
            {
            }
        };
    }
}