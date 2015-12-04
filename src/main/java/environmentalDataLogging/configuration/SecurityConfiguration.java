package environmentalDataLogging.configuration;

import environmentalDataLogging.enums.AccountType;
import environmentalDataLogging.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;

/**
 * The SecurityConfiguration configuration class extends GlobalAuthenticationConfigurerAdapter
 * and handles getting the credentials from the user logging in.  If the user is authenticated from the database,
 * the user is assigned to the Spring Security User and assigned its roles.  This user is valid until they log out.
 * The permissions will be used throughout the rest of the services and controllers to check permissions on the backend.
 * The user can also be retrieved at any time in the program.
 */
@Controller
@EnableJpaRepositories(basePackages = "environmentalDataLogging.repositories")
public class SecurityConfiguration extends GlobalAuthenticationConfigurerAdapter
{
    /**
     * The Account repository.
     */
    @Autowired
    UserRepository accountRepository;

    /**
     * The init method runs on the start of the SecurityConfiguration class.  It sets the AuthenticationManagerBuilder
     * to a new Spring User with the UserDetailService
     *
     * @param auth is the AuthenticationManagerBuilder
     * @throws Exception
     */
//    @Override
//    public void init(AuthenticationManagerBuilder auth) throws Exception
//    {
//        auth.userDetailsService(userDetailsService());
//    }
//
//    /**
//     * User details service validates the login credentials and assigns the new user to a Spring User
//     *
//     * @return the authenticated user in the UserDetailsService
//     */
//    @Bean
//    UserDetailsService userDetailsService()
//    {
//        return username -> {
//            environmentalDataLogging.entities.User user = accountRepository.findByUserName(username);
//
//                if ( user != null )
//                {
//                    if ( user.getAccountType() == AccountType.ADMIN )
//                    {
//                        return new SecurityProperties.User(user.getUserName(), user.getPassword(), AuthorityUtils.createAuthorityList("ADMIN"));
//                    }
//                    else
//                    {
//                        return new SecurityProperties.User(user.getUserName(), user.getPassword(), AuthorityUtils.createAuthorityList("USER"));
//                    }
//                }
//                else
//                {
//                    throw new UsernameNotFoundException("could not find the account '"
//                            + username + "'");
//                }
//            return null;
//        };
//    }
}
