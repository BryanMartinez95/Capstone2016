package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.SampleIdentifier;
import environmentalDataLogging.models.views.SampleModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class SampleToSampleModelMapping extends ConverterConfigurerSupport<Sample, SampleModel>
{
    @Override
    protected Converter<Sample, SampleModel> converter()
    {
        return new AbstractConverter<Sample, SampleModel>()
        {
            @Override
            protected SampleModel convert(Sample source)
            {
                SampleModel model = new SampleModel();
                model.setId(source.getId());
                model.setLabId(source.getLabId());

	            if(source.getSampleIdentifier() != null)
	            {
		            SampleIdentifier sampleIdentifier = source.getSampleIdentifier();
		            model.setSampleIdentifierId(sampleIdentifier.getId());
		            model.setCompanyName(sampleIdentifier.getCompanyName());
		            model.setCreationDate(sampleIdentifier.getCreationDate());
		            model.setSampleIdentity(sampleIdentifier.getSampleIdentity());
	            }

                model.setDate(source.getDate());
                model.setStatus(source.getStatus());
                model.setComment(source.getComment());
                model.setDeviceId(source.getDevice().getId());
                model.setDeviceName(source.getDevice().getName());

                if (source.getProject() == null)
                {
                    model.setProjectName("No Project Assigned");
                }
                else
                {
                    model.setProjectId(source.getProject().getId());
                    model.setProjectName(source.getProject().getName());
                }

                return model;
            }
        };
    }
}
