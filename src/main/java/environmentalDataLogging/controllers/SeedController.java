package environmentalDataLogging.controllers;

import environmentalDataLogging.services.SeedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Seed")
public class SeedController extends ApiBaseController
{
    @Autowired
    SeedService seedService;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public int updateSeed()
    {
        return 100;
    }
}
