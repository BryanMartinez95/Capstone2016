package environmentalDataLogging.configurations;

import com.github.jmnarloch.spring.boot.modelmapper.PropertyMapConfigurerSupport;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.models.views.ProjectModel;
import org.modelmapper.PropertyMap;

public class ProjectToProjectModelMapping extends PropertyMapConfigurerSupport<Project, ProjectModel>
{
	@Override
	public PropertyMap<Project, ProjectModel> mapping()
	{
		return new PropertyMap<Project, ProjectModel>()
		{
			@Override
			protected void configure()
			{
			}
		};
	}
}
