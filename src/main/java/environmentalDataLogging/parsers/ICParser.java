package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ICParser
{
   // @Autowired
    //IDeviceRepository deviceRepository;

    private String[] header;
    private Device device;
    Date date;

    DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss ");
    public ICParser()
    {
        //device = deviceRepository.findByName("ic");
        device = new Device();
    }
    public void setHeader(String header)
    {
        header = header.replaceAll("\\."," ");
        String[] headings = header.split(",");
        this.header = headings;


        for(int i=0;i<headings.length;i++)
        {
            System.out.println(headings[i]);
        }
    }
    public Sample parse(String[] line) throws InvalidImportException
    {
        if(line.length> 14)
            throw new InvalidImportException("Sample error");

        try
        {
            date = format.parse(line[0]);
            Sample sample = new Sample(line[1],date, Status.ACTIVE,device,line[5]);
            for(int i =6; line.length>i;i++)
            {

            }


            return sample;
        } catch (ParseException e)
        {
            e.printStackTrace();
            return null;
        }


    }



    public String format(String content)
    {
        content = content.replaceAll(","," ");
        content = content.replaceAll(";",",");
        content = content.replaceAll("(?m)^[ \t]*\r?\n", "");
        return content;
    }
}
