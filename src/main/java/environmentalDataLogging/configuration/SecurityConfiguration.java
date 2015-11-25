package environmentalDataLogging.configuration;

import environmentalDataLogging.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;

@Controller
@EnableJpaRepositories(basePackages = "environmentalDataLogging.repositories")
public class SecurityConfiguration extends GlobalAuthenticationConfigurerAdapter
{
    @Autowired
    UserRepository accountRepository;

    @Override
    public void init(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.userDetailsService(userDetailsService());
    }

    @Bean
    UserDetailsService userDetailsService()
    {
        return new UserDetailsService()
        {
            @Override
            public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
            {
                environmentalDataLogging.entities.User user = accountRepository.findByUserName(username);

//                if ( user != null )
//                {
//                    if ( user.getRoles().size() > 0 )
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
                return null;
            }
        };
    }
}
