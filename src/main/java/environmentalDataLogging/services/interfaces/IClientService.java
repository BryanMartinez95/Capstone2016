package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.models.GridRequestModel;
import environmentalDataLogging.models.GridResultModel;
import environmentalDataLogging.models.SelectListModel;
import environmentalDataLogging.models.views.ClientModel;

import java.util.List;

/**
 * The interface Client service.
 */
public interface IClientService extends ICrudService<Client, ClientModel>
{
    /**
     * Gets client list.
     *
     * @return the client list
     */
    List<SelectListModel> getClientList();
}
