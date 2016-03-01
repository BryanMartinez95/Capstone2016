package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.TestMethodModel;

public interface ITestMethodService extends ICrudService<TestMethod, TestMethodModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
