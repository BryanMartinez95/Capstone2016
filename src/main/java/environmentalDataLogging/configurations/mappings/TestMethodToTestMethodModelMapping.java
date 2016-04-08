package environmentalDataLogging.configurations.mappings;

import com.github.jmnarloch.spring.boot.modelmapper.ConverterConfigurerSupport;
import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.views.TestMethodModel;
import org.modelmapper.AbstractConverter;
import org.modelmapper.Converter;
import org.springframework.stereotype.Component;

/**
 * The type Test method to test method model mapping.
 */
@Component
public class TestMethodToTestMethodModelMapping extends ConverterConfigurerSupport<TestMethod, TestMethodModel>
{
	@Override
	protected Converter<TestMethod, TestMethodModel> converter()
	{
		return new AbstractConverter<TestMethod, TestMethodModel>()
		{
			@Override
			protected TestMethodModel convert(TestMethod source)
			{
				TestMethodModel testMethodModel = new TestMethodModel(source.getId(), source.getName(), source.getDevice().getId(), source.getDevice().getName());
				testMethodModel.setAlias(source.getAlias());
				return testMethodModel;
			}
		};
	}
}
