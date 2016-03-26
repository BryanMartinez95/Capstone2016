package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.TestMethodModel;

import java.util.List;

public interface ITestMethodService extends ICrudService<TestMethod, TestMethodModel>
{
	List<SelectListModel> getTestMethodList();
}
