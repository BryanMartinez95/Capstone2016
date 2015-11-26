package environmentalDataLogging.controllers;

import environmentalDataLogging.models.LocationModel;
import environmentalDataLogging.services.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/Location")
public class LocationController extends ApiBaseController
{

        @Autowired
        LocationService locationService;

        @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
        public void delete(@PathVariable("id") UUID id)
        {

        }

        @RequestMapping(value = "/", method = RequestMethod.PUT)
        public void update( LocationModel model)
        {

        }

        @RequestMapping(value = "/{id}", method = RequestMethod.GET)
        public LocationModel findOne(@PathVariable("id") UUID id)
        {
            return null;
        }



        @RequestMapping(value = "/All", method = RequestMethod.GET)
        public List<LocationModel> delete()
        {
            return null;
        }
}
