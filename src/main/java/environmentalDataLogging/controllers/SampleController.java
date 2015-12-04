package environmentalDataLogging.controllers;

import environmentalDataLogging.models.SampleModel;
import environmentalDataLogging.services.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

/**
 * Restful controller class to direct input for sample related actions.
 * Capable of handling cases of:
 * Deleting sample by id
 * Updating sample information
 * Getting sample by id
 * Creating a new sample
 * Getting all samples
 */
@RestController
@RequestMapping("/Sample")
public class SampleController
{
    @Autowired
    SampleService sampleService;

    /**
     * Method to delete the sample using an id.
     * @param id the sample id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    /**
     * Method to update the specified sample's information.
     * @param model the sample with updated information
     */
    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update( SampleModel model)
    {

    }

    /**
     * Method to retrieve the sample using an id.
     * @param id sample id
     * @return the sample model associated with the id
     */
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public SampleModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    /**
     * Method to create a sample using the information provided by the user.
     * @param model the sample model generated using information by the user
     */
    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") SampleModel model)
    {

    }

    /**
     * Method to retrieve all the samples.
     * @return a list of all the sample models
     */
    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<SampleModel> delete()
    {
        return null;
    }
}
