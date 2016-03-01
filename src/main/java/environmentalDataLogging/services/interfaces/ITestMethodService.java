package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.TestMethodModel;

public interface ITestMethodService extends ICrudService<TestMethod, TestMethodModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
