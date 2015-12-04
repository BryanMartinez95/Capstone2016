package environmentalDataLogging.services;

import environmentalDataLogging.models.reports.ReportOneModel;
import environmentalDataLogging.models.reports.ReportTwoModel;
import org.springframework.stereotype.Service;

import java.util.UUID;

/**
 * The Report Service generates reports and returns the reports to the calling controller
 */
@Service
public class ReportService extends BaseService
{
    /**
     * Generate report one report one model.
     *
     * @param id the id of the project
     * @return the report model to be returned
     */
    public ReportOneModel generateReportOne(UUID id)
    {
        return null;
    }

    /**
     * Generate report two report two model.
     *
     * @param id the id of the project
     * @return the report model to be returned
     */
    public ReportTwoModel generateReportTwo(UUID id)
    {
        return null;
    }

    /**
     * Generate report three report two model.
     *
     * @param id the id of the project
     * @return the report model to be returned
     */
    public ReportTwoModel generateReportThree(UUID id)
    {
        return null;
    }
}
