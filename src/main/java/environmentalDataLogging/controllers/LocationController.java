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

/**
 * Restful controller class to direct input for location related actions.
 * Capable of handling cases of:
 * Deleting location by id
 * Updating location information
 * Getting location by id
 * Getting all locations
 */
@RestController
@RequestMapping("/Location")
public class LocationController
{

        @Autowired
        LocationService locationService;

        /**
         * Method to delete the location using an id.
         * @param id the location id
         */
        @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
        public void delete(@PathVariable("id") UUID id)
        {

        }

        /**
         * Method to update the specified location's information.
         * @param model the location with updated information
         */
        @RequestMapping(value = "/", method = RequestMethod.PUT)
        public void update( LocationModel model)
        {

        }

        /**
         * Method to retrieve the location using an id.
         * @param id location id
         * @return the location model associated with the id
         */
        @RequestMapping(value = "/{id}", method = RequestMethod.GET)
        public LocationModel findOne(@PathVariable("id") UUID id)
        {
            return null;
        }

        /**
         * Method to retrieve all the locations.
         * @return a list of all the location models
         */
        @RequestMapping(value = "/All", method = RequestMethod.GET)
        public List<LocationModel> delete()
        {
            return null;
        }
}
