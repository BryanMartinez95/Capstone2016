package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Unit;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.UnitModel;

public interface IUnitService extends ICrudService<Unit, UnitModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
