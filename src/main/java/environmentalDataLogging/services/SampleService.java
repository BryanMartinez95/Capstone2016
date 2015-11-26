package environmentalDataLogging.services;

import environmentalDataLogging.models.SampleModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SampleService extends BaseService
{
    public void delete(UUID id)
    {
    }

    public void update(SampleModel model)
    {

    }

    public SampleModel findOne(UUID id)
    {
        return null;
    }

    public void create(SampleModel model)
    {

    }

    public List<SampleModel> findAll()
    {
        return null;
    }
}
