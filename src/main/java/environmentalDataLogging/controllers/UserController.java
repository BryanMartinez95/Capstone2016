package environmentalDataLogging.controllers;

import environmentalDataLogging.models.UserModel;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/User")
public class UserController
{
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") UUID id)
    {

    }

    @RequestMapping(value = "/", method = RequestMethod.PUT)
    public void update( UserModel model)
    {

    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public UserModel findOne(@PathVariable("id") UUID id)
    {
        return null;
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void delete(@PathVariable("model") UserModel model)
    {

    }

    @RequestMapping(value = "/All", method = RequestMethod.GET)
    public List<UserModel> delete()
    {
        return null;
    }
}
