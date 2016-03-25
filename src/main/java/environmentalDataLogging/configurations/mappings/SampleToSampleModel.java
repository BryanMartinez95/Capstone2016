package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.models.views.SampleModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class SampleToSampleModel extends ConverterConfigurerSupport<Sample, SampleModel>
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
                model.setDate(source.getDate());
                model.setStatus(source.getStatus());
                model.setComment(source.getComment());
                model.setDeviceName(source.getDevice().getName());
                if (source.getProject() == null)
                {
                    model.setProjectName("No Project Assigned");
                }
                else
                {
                    model.setProjectName(source.getProject().getName());
                }

                return model;
            }
        };
    }
}
