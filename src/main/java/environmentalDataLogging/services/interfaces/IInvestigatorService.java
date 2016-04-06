package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Investigator;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.InvestigatorModel;

import java.util.List;

/**
 * The interface Investigator service.
 */
public interface IInvestigatorService extends ICrudService<Investigator, InvestigatorModel>
{
    /**
     * Gets investigator list.
     *
     * @return the investigator list
     */
    List<SelectListModel> getInvestigatorList();
}
