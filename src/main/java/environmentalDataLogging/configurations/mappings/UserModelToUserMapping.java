package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.UserModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

/**
 * The type User model to user mapping.
 */
@Component
public class UserModelToUserMapping extends ConverterConfigurerSupport<UserModel, User>
{
	@Override
	protected Converter<UserModel, User> converter()
	{
		return new AbstractConverter<UserModel, User>()
		{
			@Override
			protected User convert(UserModel source)
			{
				User user = new User(source.getFirstName(), source.getLastName(), source.getEmail(), source.getPassword(), source.getStatus(), source.getRoleType());
				if(source.getId() != null)
				{
					user.setId(source.getId());
				}
				return user;
			}
		};
	}
}
