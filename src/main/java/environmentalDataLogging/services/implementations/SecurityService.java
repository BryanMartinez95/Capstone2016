package environmentalDataLogging.services.implementations;

import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.services.interfaces.ISecurityService;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class SecurityService implements ISecurityService
{
    @Autowired
    IUserRepository userRepository;

    public UUID getCurrentUserId()
    {
        org.springframework.security.core.userdetails.User currentUser =
                (org.springframework.security.core.userdetails.User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

        return userRepository.findByEmail(currentUser.getUsername()).getId();
    }
}
