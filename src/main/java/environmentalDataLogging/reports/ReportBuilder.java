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
import net.sf.dynamicreports.report.constant.HorizontalTextAlignment;
import net.sf.dynamicreports.report.datasource.DRDataSource;
import net.sf.dynamicreports.report.exception.DRException;
import net.sf.jasperreports.engine.JRDataSource;

public class ReportBuilder {
    public ReportBuilder()
    {

    }

    public byte[] build(Project project)
    {
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        TextColumnBuilder<String> sampleColumn = col.column("Sample", "sample", type.stringType());
        ColumnGroupBuilder itemGroup = grp.group(sampleColumn).startInNewPage();
        try {

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
                                cmp.image("resource/images/SAIT_Logo.png")
                                        .setHorizontalAlignment(HorizontalAlignment.LEFT))
                                .setBackgroundComponent(cmp.text("ARIS - Environmental Technologies Research \nSouthern Alberta Institute of Technology\n1301 16th Ave NW,Calgary AB, T2M 0L4\n" +
                                        "Phone: 403 -774-4983 Fax: 403-210-4373\nhttp://www.sait.ca/research-and-innovation.php").setHorizontalAlignment(HorizontalAlignment.RIGHT)))
                        .pageFooter(Template.footerComponent)
                        .setDataSource(createDataSource(new ArrayList<>(project.getSamples())))
                        //.show()
                       // .toPdf(new FileOutputStream("C:/Developer/watchMeCapstone/Report/report.pdf"))
                        .toPdf(bos);
                return bos.toByteArray();

//            } catch (FileNotFoundException e) {
//                e.printStackTrace();
//            }
        } catch (DRException e) {
            e.printStackTrace();
            return null;
        }
    }

    private JRDataSource createDataSource(List<Sample> samples) {

        DRDataSource dataSource = new DRDataSource("sample", "testMethod", "value", "unit","date");
        for(int i =0;i<samples.size();i++)
        {
            List<Measurement> measurements= new ArrayList<>(samples.get(i).getMeasurements());



                for (int j = 0; j < measurements.size(); j++) {
                    if(measurements.get(j).getTestMethod() == null)
                    {
                        measurements.get(j).setTestMethod(new TestMethod("N/A"));
                    }
                    if( measurements.get(j).getUnit() == null)
                    {
                        measurements.get(j).setUnit(new Unit("N/A"));
                    }
                    if(measurements.get(j).getValue() != 0) {
                        dataSource.add(samples.get(i).getLabId(), measurements.get(j).getTestMethod().getName(), measurements.get(j).getValue(), measurements.get(j).getUnit().getName(), measurements.get(j).getDate());
                    }
                }

        }

        return dataSource;
    }




}
