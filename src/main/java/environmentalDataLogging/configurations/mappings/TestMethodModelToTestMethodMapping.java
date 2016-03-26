package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.views.TestMethodModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

@Component
public class TestMethodModelToTestMethodMapping extends ConverterConfigurerSupport<TestMethodModel, TestMethod>
{
	@Override
	protected Converter<TestMethodModel, TestMethod> converter()
	{
		return new AbstractConverter<TestMethodModel, TestMethod>()
		{
			@Override
			protected TestMethod convert(TestMethodModel source)
			{
				Device device = new Device();
				device.setId(source.getDeviceId());
				device.setName(source.getDeviceName());
				TestMethod testMethod =  new TestMethod(source.getName(), device);

				if(source.getId() != null)
				{
					testMethod.setId(source.getId());
				}

				return testMethod;
			}
		};
	}
}
