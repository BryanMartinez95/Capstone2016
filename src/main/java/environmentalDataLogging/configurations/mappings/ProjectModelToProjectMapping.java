package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Client;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.ProjectModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Component
public class ProjectModelToProjectMapping extends ConverterConfigurerSupport<ProjectModel, Project>
{
	@Override
	protected Converter<ProjectModel, Project> converter()
	{
		return new AbstractConverter<ProjectModel, Project>()
		{
			@Override
			protected Project convert(ProjectModel source)
			{
				Project entity = new Project();

				if(source.getId() != null)
				{
					entity.setId(source.getId());
				}

				entity.setProjectId(source.getProjectId());

				entity.setName(source.getName());

				entity.setStartDate(source.getStartDate());
				entity.setEndDate(source.getEndDate());

				if(source.getClients() != null)
				{
					List<UUID> clientIds = source.getClients();
					Set<Client> clients = new HashSet<>();

					for (UUID clientId : clientIds)
					{
						Client client = new Client();
						client.setId(clientId);
						clients.add(client);
					}
					entity.setClients(clients);
				}

				if(source.getUsers() != null)
				{
					List<UUID> userIds = source.getUsers();
					Set<User> users = new HashSet<>();

					for (UUID userId : userIds)
					{
						User user = new User();
						user.setId(userId);
						users.add(user);
					}
					entity.setUsers(users);
				}

				entity.setStatus(source.getStatus());
				entity.setComment(source.getComment());

				return entity;
			}
		};
	}
}
