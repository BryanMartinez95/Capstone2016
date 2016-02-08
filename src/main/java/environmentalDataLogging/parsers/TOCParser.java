package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.repositories.IDeviceRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;


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

    public void format(String content)
    {

        System.out.println(content);
    }
}
