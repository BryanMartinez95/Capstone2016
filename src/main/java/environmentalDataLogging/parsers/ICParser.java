package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class ICParser
{

    ITestMethodRepository testMethodRepository;

    private String[] header;
    private Device device;
    Date date;
    DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ");
    Sample sample;

    public ICParser(IDeviceRepository deviceRepository,ITestMethodRepository testMethodRepository)
    {
        this.testMethodRepository = testMethodRepository;
        device = deviceRepository.findByName("IC");
    }

    public void setHeader(String[] header)
    {
        for(int i =0;header.length>i;i++)
        {
           header[i]= header[i].replaceAll("\\."," ");
        }
        this.header = header;
    }

    public Sample parse(String[] line,List<Sample> samples) throws InvalidImportException
    {
        Set<Measurement> measurements = new HashSet<>();
        if(line.length != 14)
        {
            throw new InvalidImportException("Sample error");
        }

        try
        {
            date = format.parse(line[0]);
            if(samples.size() == 0)
            {
                this.sample = new Sample(line[1],date, Status.ACTIVE,device,line[5]);

            }
            for(Sample sample: samples)
            {
                if(sample.getLabId().equalsIgnoreCase(line[1]))
                {
                    this.sample = sample;
                    measurements.addAll(sample.getMeasurements());
                    break;
                }
                else
                {
                    this.sample = new Sample(line[1],date, Status.ACTIVE,device,line[5]);
                    break;
                }
            }

            for(int i =6; line.length>i;i++)
            {
                if(!line[i].equalsIgnoreCase(""))
                {
                    try
                   {
                        Measurement measurement = new Measurement(Double.parseDouble(line[i]), testMethodRepository
                                .findByName(header[i]),sample,date);

                       measurements.add(measurement);

                    }catch (NumberFormatException e)
                    {
                      //  System.out.println("Invalid measurement");
                    }

                }
            }
            sample.setMeasurements(measurements);

            return sample;
        } catch (ParseException e)
        {
            e.printStackTrace();
            return null;
        }


    }



    public List<String[]> format(String content)
    {

        content = content.replaceAll(","," ");
        content = content.replaceAll(";",",");
        content = content.replaceAll("(?m)^[ \t]*\r?\n", "");

        String[] lines = content.split("\\r\\n");
        List<String[]> rows = new ArrayList<>();
        for(int i =0;lines.length>i;i++)
        {
            String[] line = lines[i].split(",",-1);

            if(line[1].equalsIgnoreCase("MQ") || line[1].startsWith("Standard") || line[1]
                    .equalsIgnoreCase("Blank"))
            {

            }
            else
            {
                rows.add(line);
            }

        }
        return rows;
    }
}
