package environmentalDataLogging.services;

import environmentalDataLogging.models.reports.ReportOneModel;
import environmentalDataLogging.models.reports.ReportTwoModel;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ReportService extends BaseService
{
    public ReportOneModel generateReportOne(UUID id)
    {
        return null;
    }

    public ReportTwoModel generateReportTwo(UUID id)
    {
        return null;
    }

    public ReportTwoModel generateReportThree(UUID id)
    {
        return null;
    }
}
