package environmentalDataLogging.services;

import environmentalDataLogging.models.LocationModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class LocationService extends BaseService
{
    public void delete(UUID id)
    {
    }

    public void update(LocationModel model)
    {

    }

    public LocationModel findOne(UUID id)
    {
        return null;
    }

    public void create(LocationModel model)
    {

    }

    public List<LocationModel> findAll()
    {
        return null;
    }
}
