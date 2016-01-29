package environmentalDataLogging.configurations;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * The MvcConfig configurations maps the valid url's to their required view.
 * Views that are not mapped with an URL will not be available and URL's
 * that are not listed that are requested will result in a 404 error
 */
@Configuration
public class MvcConfig extends WebMvcConfigurerAdapter
{
	/**
	 * Configure simple automated controllers pre-configured with the response
	 * status code and/or a view to render the response body. This is useful in
	 * cases where there is no need for custom controller logic -- e.g. render a
	 * home page, perform simple site URL redirects, return a 404 status with
	 * HTML content, a 204 with no content, and more.
	 */
	@Override
	public void addViewControllers(ViewControllerRegistry registry)
	{
		registry.addViewController("/").setViewName("login");
		registry.addViewController("/Dashboard").setViewName("main");
		registry.addViewController("/Projects").setViewName("main");
		registry.addViewController("/Users").setViewName("main");
		registry.addViewController("/Devices").setViewName("main");
		registry.addViewController("/Samples").setViewName("main");
		registry.addViewController("/About").setViewName("main");
	}
}
