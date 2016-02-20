package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.codehaus.groovy.runtime.powerassert.SourceText;
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


    private String[] header;
    private Device device;
    Date date;
    boolean headerSet = false;
   DateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm:SSa");

    public ICPParser(IDeviceRepository deviceRepository)
    {
        device = deviceRepository.findByName("ICP");
    }


    public void setHeader(String[] header)
    {
        this.header = header;
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
    public List<String[]> format(String content)
    {
       // content = content.replaceAll("(?m)^[ \t]*\r?\n", "");
        List<String[]> list = new ArrayList<>();
        String[] lines = content.split("\\r\\n");
        for(int i=0;lines.length>i;i++)
        {
            if(lines[i].contains("Ag3280") && headerSet == false)
            {
                setHeader(lines[i].split(",",-1));

                headerSet = true;
            }
            else if(lines[i].matches("(\\d).+"))
            {
                String[] split = lines[i].split(",",-1);

                list.add(split);
            }

        }
        for(String[] item:list)
        {
           for(int i=0;item.length>i;i++)
           {
               System.out.print(item[i]+",");
           }
            System.out.println("");
        }
        return list;
    }
}
