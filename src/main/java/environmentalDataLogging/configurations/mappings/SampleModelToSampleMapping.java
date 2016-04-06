package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.SampleIdentifier;
import environmentalDataLogging.models.views.SampleModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

/**
 * The type Sample model to sample mapping.
 */
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

				SampleIdentifier sampleIdentifier = new SampleIdentifier();

				if(source.getSampleIdentifierId() != null)
				{
					sampleIdentifier.setId(source.getSampleIdentifierId());
				}

				sampleIdentifier.setCompanyName(source.getCompanyName());
				sampleIdentifier.setCreationDate(source.getCreationDate());
				sampleIdentifier.setSampleIdentity(source.getSampleIdentity());

				entity.setSampleIdentifier(sampleIdentifier);

				entity.setDate(source.getDate());
				entity.setStatus(source.getStatus());
				entity.setComment(source.getComment());
				entity.setMeasurements(null);

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
