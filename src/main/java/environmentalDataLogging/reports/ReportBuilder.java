package environmentalDataLogging.reports;

import static net.sf.dynamicreports.report.builder.DynamicReports.*;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.time.LocalDate;
import java.util.*;


import environmentalDataLogging.entities.*;
import environmentalDataLogging.enums.Status;
import net.sf.dynamicreports.report.builder.column.TextColumnBuilder;
import net.sf.dynamicreports.report.builder.group.ColumnGroupBuilder;

import net.sf.dynamicreports.report.constant.HorizontalAlignment;
import net.sf.dynamicreports.report.constant.HorizontalImageAlignment;
import net.sf.dynamicreports.report.constant.HorizontalTextAlignment;
import net.sf.dynamicreports.report.datasource.DRDataSource;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.JRDataSource;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;

/**
 * This class is used to build a report
 */
public class ReportBuilder
{
    /**
     * Instantiates a new Report builder.
     */
    public ReportBuilder()
    {

    }

    /**
     * This method takes in a specific project and creates a pdf
     *
     * @param project the project
     * @return this method returns a byte array to the client to be interpreted as a pdf
     */
    public byte[] build(Project project)
    {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        TextColumnBuilder<String> sampleColumn = col.column("Sample", "sample", type.stringType());
        ColumnGroupBuilder itemGroup = grp.group(sampleColumn).startInNewPage();
        try
        {

//            try {
            report()
                    .setTemplate(Template.reportTemplate)
                    .columns(
                            sampleColumn,
                            col.column("Parameter Tested ", "testMethod", type.stringType()).setHorizontalTextAlignment(HorizontalTextAlignment.RIGHT),
                            col.column("Value", "value", type.doubleType()).setHorizontalTextAlignment(HorizontalTextAlignment.RIGHT),
                            col.column("Unit", "unit", type.stringType()).setHorizontalTextAlignment(HorizontalTextAlignment.RIGHT),
                            col.column("Date", "date", type.dateType()).setHorizontalTextAlignment(HorizontalTextAlignment.RIGHT))
                    .groupBy(itemGroup)
                    .pageHeader(cmp.horizontalList(
                            cmp.image("resource/images/sait_logo_symbol.png").setHorizontalImageAlignment
                                    (HorizontalImageAlignment.LEFT))
                            .setBackgroundComponent(cmp.text("ARIS - Environmental Technologies Research \nSouthern Alberta Institute of Technology\n1301 16th Ave NW,Calgary AB, T2M 0L4\n" +
                                    "Phone: 403 -774-4983 Fax: 403-210-4373\nhttp://www.sait" +
                                    ".ca/research-and-innovation.php").setStyle(Template.bold12CenteredStyle)
                                    .setHorizontalTextAlignment(
                                    HorizontalTextAlignment.RIGHT)))
                    .pageFooter(Template.footerComponent)
                    .setDataSource(createDataSource(new ArrayList<>(project.getSamples())))
                    //.show()
                    // .toPdf(new FileOutputStream("C:/Developer/watchMeCapstone/Report/report.pdf"))
                    .toPdf(bos);
            return bos.toByteArray();

//            } catch (FileNotFoundException e) {
//                e.printStackTrace();
//            }
        }
        catch (DRException e)
        {
            e.printStackTrace();
            return null;
        }
    }

    /**
     * This method sets the datasource the report is dealing with
     *
     * @param samples
     * @return returns the data from the project
     */
    private JRDataSource createDataSource(List<Sample> samples)
    {
        boolean isMeasurements = false;

        DRDataSource dataSource = new DRDataSource("sample", "testMethod", "value", "unit", "date");
        for (int i = 0; i < samples.size(); i++)
        {

            List<Measurement> measurements = new ArrayList<>(samples.get(i).getMeasurements());

            if (!measurements.isEmpty() && !isMeasurements)
            {
                isMeasurements = true;
            }

            for (int j = 0; j < measurements.size(); j++)
            {
                if (measurements.get(j).getTestMethod() == null)
                {
                    measurements.get(j).setTestMethod(new TestMethod("N/A"));
                }
                if (measurements.get(j).getUnit() == null)
                {
                    measurements.get(j).setUnit(new Unit("N/A"));
                }
                if (measurements.get(j).getValue() != 0)
                {
                    dataSource.add(samples.get(i).getLabId(), measurements.get(j).getTestMethod().getAlias(), measurements
                            .get(j).getValue(), measurements.get(j).getUnit().getName(), measurements.get(j).getDate());
                }
            }

        }

        if (!isMeasurements)
        {
            throw new ResourceNotFoundException("Samples do not have any measurments");
        }

        return dataSource;
    }


}
