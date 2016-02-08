package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.models.grids.GridRequestModel;
import environmentalDataLogging.models.grids.GridResultModel;
import environmentalDataLogging.models.views.ClientModel;

public interface IClientService extends ICrudService<Client, ClientModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
