package environmentalDataLogging.controllers;

import environmentalDataLogging.services.ExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Restful controller class to direct input for export related actions.
 */
@RestController
@RequestMapping("/Export")
public class ExportController
{
	@Autowired
	ExportService exportService;
}
