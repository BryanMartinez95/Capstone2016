package environmentalDataLogging.controllers;

import environmentalDataLogging.models.ClientModel;
import environmentalDataLogging.models.LocationModel;
import java.util.List;
import java.util.UUID;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Location")
public class LocationController
{

        @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
        public void delete(@PathVariable("id") UUID id)
        {

        }

        @RequestMapping(method = RequestMethod.PUT)
        public void update( LocationModel model)
        {

        }

        @RequestMapping(value = "/{id}", method = RequestMethod.GET)
        public LocationModel findOne(@PathVariable("id") UUID id)
        {
            return null;
        }

        @RequestMapping(method = RequestMethod.PUT)
        public void delete(@PathVariable("model") LocationModel model)
        {

        }

        @RequestMapping(value = "/All", method = RequestMethod.GET)
        public List<LocationModel> delete()
        {
            return null;
        }
}
