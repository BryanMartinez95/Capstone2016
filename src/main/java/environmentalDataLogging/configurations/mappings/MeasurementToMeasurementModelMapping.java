package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.models.views.MeasurementModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class MeasurementToMeasurementModelMapping extends ConverterConfigurerSupport<Measurement, MeasurementModel>
{
	@Override
	protected Converter<Measurement, MeasurementModel> converter()
	{
		return new AbstractConverter<Measurement, MeasurementModel>()
		{
			@Override
			protected MeasurementModel convert(Measurement source)
			{
				MeasurementModel model = new MeasurementModel();
				model.setId(source.getId());
				model.setValue(source.getValue());
				model.setTemperature(source.getTemperature());

				if(source.getTestMethod() != null)
					model.setTestMethodId(source.getTestMethod().getId());

				if(source.getUnit() != null)
					model.setUnitId(source.getUnit().getId());

				model.setSampleId(source.getSample().getId());
				model.setDate(source.getDate());
				model.setStatus(source.getStatus());

				return model;
			}
		};
	}
}
