package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.views.ProjectModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

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
                model.setName(source.getName());
                model.setStartDate(source.getStartDate());
                model.setEndDate(source.getEndDate());
                model.setStatus(source.getStatus());
                if (source.getInvestigator() != null)
                {
                    model.setInvestigator(source.getInvestigator());
                }

                model.setComment(source.getComment());

                return model;
            }
        };
    }
}
