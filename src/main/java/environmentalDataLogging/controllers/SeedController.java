package environmentalDataLogging.controllers;

import environmentalDataLogging.services.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Restful controller class to direct input for seed related actions.
 * Capable of handling cases of:
 * Updating seed data
 */
@RestController
@RequestMapping("/Seed")
public class SeedController
{
    @Autowired
    SeedService seedService;

    /**
     * Method to update the seed data.
     */
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public void updateSeed()
    {

    }
}
