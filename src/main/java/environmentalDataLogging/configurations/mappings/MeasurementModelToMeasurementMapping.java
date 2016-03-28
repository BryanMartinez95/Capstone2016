package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.views.MeasurementModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class MeasurementModelToMeasurementMapping extends ConverterConfigurerSupport<MeasurementModel, Measurement>
{
	@Override
	protected Converter<MeasurementModel, Measurement> converter()
	{
		return new AbstractConverter<MeasurementModel, Measurement>()
		{
			@Override
			protected Measurement convert(MeasurementModel source)
			{
				Measurement entity = new Measurement();

				if(source.getId() != null)
				{
					entity.setId(source.getId());
				}

				Sample sample = new Sample();
				sample.setId(source.getSampleId());
				entity.setSample(sample);
				entity.setDate(source.getDate());
				entity.setTemperature(source.getTemperature());

				if(source.getTestMethodId() != null)
				{
					TestMethod testMethod = new TestMethod();
					testMethod.setId(source.getTestMethodId());
					entity.setTestMethod(testMethod);
				}

				entity.setValue(source.getValue());

				if(source.getUnitId() != null)
				{
					Unit unit = new Unit();
					unit.setId(source.getUnitId());
					entity.setUnit(unit);
				}

				entity.setStatus(source.getStatus());

				return entity;
			}
		};
	}
}
