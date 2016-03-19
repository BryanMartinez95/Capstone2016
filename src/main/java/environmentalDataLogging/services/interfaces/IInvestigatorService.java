package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Investigator;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.InvestigatorModel;

import java.util.List;

public interface IInvestigatorService extends ICrudService<Investigator, InvestigatorModel>
{
<<<<<<< HEAD
=======
	GridResultModel getGridList(GridRequestModel gridRequestModel);
	List<SelectListModel> getInvestigatorList();
>>>>>>> 12e14cf528b7a65cd17a0b985d023d9fda9be2ce
}
