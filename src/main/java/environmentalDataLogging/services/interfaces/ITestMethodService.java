package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.TestMethodModel;

import java.util.List;

/**
 * The interface Test method service.
 */
public interface ITestMethodService extends ICrudService<TestMethod, TestMethodModel>
{
    /**
     * Gets test method list.
     *
     * @return the test method list
     */
    List<SelectListModel> getTestMethodList();
}
