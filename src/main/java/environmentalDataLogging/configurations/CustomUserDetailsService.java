package environmentalDataLogging.configurations;

import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.repositories.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService
{
    @Autowired
    private IUserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
    {
        User user = userRepository.findByEmail(username);

        if (user != null)
        {
            if (user.getRoleType().equals(RoleType.ADMIN))
            {
                return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), AuthorityUtils.createAuthorityList("ROLE_ADMIN"));
            }
            else
            {
                return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), AuthorityUtils.createAuthorityList("ROLE_USER"));
            }
        }
        else
        {
            throw new UsernameNotFoundException("could not find the user '"
                    + username + "'");
        }
    }
}
