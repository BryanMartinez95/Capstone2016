package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class UserToUserModelMapping extends ConverterConfigurerSupport<User, UserModel>
{
    @Override
    protected Converter<User, UserModel> converter()
    {
        return new AbstractConverter<User, UserModel>()
        {
            @Override
            protected UserModel convert(User source)
            {
                return new UserModel(source.getId(), source.getFirstName(), source.getLastName(), source.getEmail(), null, source.getStatus(), source.getRoleType());
            }
        };
    }
}
