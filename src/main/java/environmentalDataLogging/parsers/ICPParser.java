package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.springframework.beans.factory.annotation.Autowired;

import java.text.DateFormat;
import java.text.ParseException;
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
    boolean headerSet = false;
   DateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm:SSa");

    public ICPParser()
    {
      //  this.deviceRepository = deviceRepository;
       // device = deviceRepository.findByName("ICP");
    }


    public void setHeader(String header)
    {


    }
    public void parse(String[] line) throws InvalidImportException {
        if(line.length != 202)
        {
            throw new InvalidImportException("Sample error");
        }

        try {
            if(!line[0].endsWith("M"))
            {
                line[0] = line[0] + "M";
            }
            date = format.parse(line[0]);
            System.out.println(format.format(date));
        } catch (ParseException e) {
            e.printStackTrace();
        }
    }

    /**
     * if line starts with published, ignore it
     * remove all header repeats
     */
    public List format(String content)
    {
       // content = content.replaceAll("(?m)^[ \t]*\r?\n", "");
        List<String> list = new ArrayList<>(Arrays.asList(content.split("\\r\\n")));
        for(int i=0;list.size()>i;i++)
        {
            if(list.get(i).contains("Ag3280") && headerSet == false)
            {
                header = list.get(i).split(",", -1);
                System.out.println(list.get(i));
                System.out.println(header.length);
                headerSet = true;
            }
            if(!list.get(i).matches("(\\d).+"))
            {
                list.remove(i);
                i--;
            }
        }
        for(String item:list)
        {
            System.out.println(item);
            String[] itemA =item.split(",",-1);
            //System.out.println(itemA.length);
        }
        return list;
    }
}
