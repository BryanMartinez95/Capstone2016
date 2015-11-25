package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ProjectModel;
import environmentalDataLogging.models.SampleModel;
import java.util.List;
import java.util.UUID;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Sample")
public class SampleController
{
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    @RequestMapping(method = RequestMethod.PUT)
    public void update( SampleModel model)
    {

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public SampleModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") SampleModel model)
    {

    }

    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<SampleModel> delete()
    {
        return null;
    }
}
