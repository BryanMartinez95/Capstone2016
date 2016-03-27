package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.UnitModel;

import java.util.List;

public interface IUnitService extends ICrudService<Unit, UnitModel>
{
	List<SelectListModel> getUnitList();
}
