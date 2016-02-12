package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.repositories.IDeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;


public class TOCParser
{
//    @Autowired
//    IDeviceRepository deviceRepository;

    private String[] header;
    private Device device;
    Date date;

    public TOCParser()
    {
       // this.deviceRepository = deviceRepository;
       // device = deviceRepository.findByName("TOC");
    }
    public void setHeader(String header)
    {

    }
    public void parse(String[] line)
    {
        Sample sample = new Sample();

    }

    public List<String> format(String content)
    {
        List<String> list = new ArrayList<>(Arrays.asList(content.split("\\r\\n")));

        for(int i =0;list.size()>i;i++)
        {
            if(list.get(i).startsWith("Type"))
            {
                System.out.println(list.get(i));
                //set header
            }
            if(list.get(i).startsWith("Unknown"))
            {
                System.out.println(list.get(i));
                //get all items
            }
        }
       // System.out.println(content);

        return null;
    }

}



























