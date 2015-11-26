package environmentalDataLogging.controllers;

import environmentalDataLogging.services.ExportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Export")
public class ExportController extends ApiBaseController
{
	@Autowired
	ExportService exportService;
}
