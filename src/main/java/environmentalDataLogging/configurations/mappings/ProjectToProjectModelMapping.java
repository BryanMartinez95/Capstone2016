package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Client;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.models.views.ProjectModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Component
public class ProjectToProjectModelMapping extends ConverterConfigurerSupport<Project, ProjectModel>
{
    @Override
    protected Converter<Project, ProjectModel> converter()
    {
        return new AbstractConverter<Project, ProjectModel>()
        {
            @Override
            protected ProjectModel convert(Project source)
            {
                ProjectModel model = new ProjectModel();
                model.setId(source.getId());
	            model.setProjectId(source.getProjectId());
                model.setName(source.getName());
                model.setStartDate(source.getStartDate());
                model.setEndDate(source.getEndDate());
                model.setStatus(source.getStatus());

	            if(source.getClients() != null)
	            {
		            List<UUID> clientIds = new ArrayList<>();
		            for (Client client: source.getClients())
		            {
			            clientIds.add(client.getId());
		            }
		            model.setClients(clientIds);
	            }

	            if(source.getUsers() != null)
	            {
		            List<UUID> userIds = new ArrayList<>();
		            for (User user: source.getUsers())
		            {
			            userIds.add(user.getId());
		            }
		            model.setUsers(userIds);
	            }

                if (source.getInvestigator() != null)
                {
                    model.setInvestigatorId(source.getInvestigator().getId());
                }

                model.setComment(source.getComment());

                return model;
            }
        };
    }
}
