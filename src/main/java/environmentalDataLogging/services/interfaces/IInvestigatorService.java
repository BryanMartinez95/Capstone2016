package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Investigator;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.InvestigatorModel;

import java.util.List;

public interface IInvestigatorService extends ICrudService<Investigator, InvestigatorModel>
{
	List<SelectListModel> getInvestigatorList();
}
