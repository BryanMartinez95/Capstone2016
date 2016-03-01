package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Investigator;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.InvestigatorModel;

public interface IInvestigatorService extends ICrudService<Investigator, InvestigatorModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
