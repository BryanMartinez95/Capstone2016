package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.repositories.IDeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by 631152 on 1/28/2016.
 */
public class ICPParser
{
    @Autowired
    IDeviceRepository deviceRepository;

    private String[] header;
    private Device device;
    Date date;
   // DateFormat format = new SimpleDateFormat("xx");

    public ICPParser()
    {
      //  this.deviceRepository = deviceRepository;
       // device = deviceRepository.findByName("ICP");
    }


    public void setHeader(String header)
    {


    }
    public void parse()
    {
    }

    /**
     * if line starts with published, ignore it
     * remove all header repeats
     */
    public String format(String content)
    {
       // content = content.replaceAll("(?m)^[ \t]*\r?\n", "");
        List<String> list = new ArrayList<>(Arrays.asList(content.split("\\r\\n")));
        for(int i=0;list.size()>i;i++)
        {
            if(!list.get(i).matches("(\\d).+"))
            {
                list.remove(i);
                i--;
            }
        }
        for(String item:list)
        {
            System.out.println(item);
        }
       // System.out.println(content);
        return null;
    }
}
