package environmentalDataLogging.configurations;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * The Web security configurations handles permissions on all pages in the app.  The permissions change
 * if a user is logged in or not.  If the user is not logged in, they can not access the /Main url which is the apps
 * Single Page App Page.  When the user logs out, /Main will be unavailable again and redirected to the "/" url
 */
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class WebSecurityConfiguration extends WebSecurityConfigurerAdapter
{
    /**
     * configures the HttpSecurity
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception
    {
        http    .authorizeRequests()
                .antMatchers("/").permitAll()
                .anyRequest().authenticated();

        http
                .formLogin()
                .defaultSuccessUrl("/Dashboard")
                .loginPage("/")
                .permitAll();

        http
                .logout()
                .logoutSuccessUrl("/")
                .permitAll();

        http
                .csrf().disable();
    }

    /**
     * configures what files are permission free
     */
    @Override
    public void configure(WebSecurity web)
    {
        web.ignoring().antMatchers("/assets/**");
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.inMemoryAuthentication().withUser("seed").password("seed").roles("ADMiN");
    }
}
