package environmentalDataLogging.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Seed")
public class SeedController
{
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public void updateSeed()
    {

    }
}
