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
    @Autowired
    IDeviceRepository deviceRepository;

    @Autowired
    ITestMethodRepository testMethodRepository;

    private String[] header;
    private Device device;
    Date date;
    DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ");

    public ICParser(IDeviceRepository deviceRepository)
    {
        this.deviceRepository = deviceRepository;
//        device = deviceRepository.findByName("IC");
        //device = new Device();
    }
    public void setHeader(String[] header)
    {
        for(int i =0;header.length>i;i++)
        {
            header[i].replaceAll("\\."," ");
        }

        this.header = header;


        for(int i=0;i<header.length;i++)
        {
            System.out.println(header[i]);
        }
    }
    public Sample parse(String[] line) throws InvalidImportException
    {
        if(line.length != 14)
        {
            throw new InvalidImportException("Sample error");
        }

        try
        {
            date = format.parse(line[0]);
            Sample sample = new Sample(line[1],date, Status.ACTIVE,device,line[5]);
            for(int i =6; line.length>i;i++)
            {
                if(!line[i].equalsIgnoreCase(""))
                {
                    try
                   {
                        Measurement measurement = new Measurement(Double.parseDouble(line[i]), testMethodRepository.findByName(header[i]));
                       Set<Measurement> measurements =sample.getMeasurements();
                       if(measurements==null)
                       {
                           measurements = new HashSet<>();
                       }
                       measurements.add(measurement);
                       sample.setMeasurements(measurements);
                    }catch (NumberFormatException e)
                    {
                        System.out.println("invalid measurement");
                    }

                }
            }


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
            for(int j =0;line.length>j;j++)
            {
                if(line[1].equalsIgnoreCase("MQ") || line[1].startsWith("Standard") ||line[1]
                        .equalsIgnoreCase("Blank"))
                {
                    System.out.println("invalid");
                }
                else
                {
                    rows.add(line);
                }
            }
        }
//        List<String> list = new ArrayList<>(Arrays.asList(content.split("\\r\\n")));
//        for(int i =0;list.size()>i;i++)
//        {
//            if(list.get(i).equalsIgnoreCase("MQ") || list.get(i).startsWith("Standard") ||list.get(i)
//                    .equalsIgnoreCase("Blank") )
//            {
//                list.remove(i);
//                i--;
//            }
//        }
        for(int i =0;rows.size()>i;i++)
        {
             System.out.println(rows.get(i));
        }
        return rows;
    }
}
