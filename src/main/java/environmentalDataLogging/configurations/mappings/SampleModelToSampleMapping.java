package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.views.SampleModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class SampleModelToSampleMapping extends ConverterConfigurerSupport<SampleModel, Sample>
{
	@Override
	protected Converter<SampleModel, Sample> converter()
	{
		return new AbstractConverter<SampleModel, Sample>()
		{
			@Override
			protected Sample convert(SampleModel source)
			{
				Sample entity = new Sample();

				entity.setLabId(source.getLabId());
				entity.setSampleIdentifier(source.getSampleIdentifier());
				entity.setDate(source.getDate());
				entity.setStatus(source.getStatus());
				entity.setComment(source.getComment());
				entity.setMeasurements(source.getMeasurements());

				if(source.getId() != null)
				{
					entity.setId(source.getId());
				}

				if (source.getProjectId() != null)
				{
					Project project = new Project();
					project.setId(source.getProjectId());
					project.setName(source.getProjectName());
					entity.setProject(project);
				}

				if (source.getDeviceId() != null)
				{
					Device device = new Device();
					device.setId(source.getDeviceId());
					device.setName(source.getDeviceName());
					entity.setDevice(device);
				}

				return entity;
			}
		};
	}
}
