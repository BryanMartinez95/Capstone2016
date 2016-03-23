package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.apache.tomcat.jni.Local;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;

public class ICParser extends DeviceParser
{

    ITestMethodRepository testMethodRepository;
    IUserRepository userRepository;

    private String[] header;
    private Device device;
    Date date;
    DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ");
    Sample sample;

    public ICParser(IDeviceRepository deviceRepository,ITestMethodRepository testMethodRepository,IUserRepository userRepository)
    {
        this.testMethodRepository = testMethodRepository;
        device = deviceRepository.findByName("IC");
        this.userRepository = userRepository;
    }
    @Override
    public void setHeader(String[] header)
    {
        for(int i =0;header.length>i;i++)
        {
           header[i]= header[i].replaceAll("\\."," ");
        }
        this.header = header;
    }

    @Override
    public String setLabId(String[] line)
    {
        return line[1];

    }

    @Override
    public Sample parse(String[] line,List<Sample> samples,String labId) throws InvalidImportException
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
                this.sample = new Sample(line[1],date, Status.ACTIVE,device,line[5], LocalDate.now(),userRepository
                        .findByEmail
                        ("SYSTEM").getId());

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
                    this.sample = new Sample(line[1],date, Status.ACTIVE,device,line[5],LocalDate.now(),userRepository
                            .findByEmail
                            ("SYSTEM").getId());
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
                                .findByName(header[i]),sample,date,Status.ACTIVE);

                       measurements.add(measurement);

                    }catch (NumberFormatException e)
                    {
                      //  catches invalid numbers
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


    @Override
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
        setHeader(rows.get(0));
        rows.remove(0);
        return rows;
    }
}
