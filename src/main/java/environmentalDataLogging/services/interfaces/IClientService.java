package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.views.ClientModel;

public interface IClientService extends ICrudService<Client, ClientModel>
{
	GridResultModel getGridList(GridRequestModel gridRequestModel);
}
