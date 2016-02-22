package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.repositories.IUnitRepository;
import environmentalDataLogging.tasks.InvalidImportException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.method.P;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;


public class TOCParser
{

    ITestMethodRepository testMethodRepository;
    IUnitRepository unitRepository;
    private String[] header;
    private Device device;
    Date date;
    boolean headerSet = false;
    Sample sample;
    DateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss a");

    public TOCParser(IDeviceRepository deviceRepository, ITestMethodRepository testMethodRepository,IUnitRepository unitRepository)
    {
        this.unitRepository = unitRepository;
        this.testMethodRepository = testMethodRepository;
        device = deviceRepository.findByName("TOC/TN");
    }
    public void setHeader(String[] header)
    {

    }
    public Sample parse(String[] line,List<Sample> samples,String labid) throws InvalidImportException {
        Set<Measurement> measurements = new HashSet<>();
        if(line.length != 18)
        {
            throw new InvalidImportException("Sample error");
        }


        try{
            date = format.parse(line[8]);
            if(samples.size() ==0)
            {
                this.sample = new Sample(labid,date, Status.ACTIVE,device);
            }
            for(Sample sample:samples)
            {
                if(sample.getLabId().equalsIgnoreCase(labid))
                {
                    this.sample = sample;
                    measurements = sample.getMeasurements();
                    break;
                }
                else{
                    this.sample = new Sample(labid,date, Status.ACTIVE,device);
                    break;
                }
            }
            String[] results = line[14].split(" ");
            for(int i=0;results.length>i;i++)
            {
                String[] measurementSplit = results[i].split(":");
                if(measurementSplit[1].endsWith("mg/L"))
                {
                    measurementSplit[1]= measurementSplit[1].substring(0,measurementSplit[1].length()-4);
                    Measurement measurement = new Measurement(Double.parseDouble(measurementSplit[1]),testMethodRepository
                            .findByName(measurementSplit[0]),sample,date,unitRepository.findByName("mg/L"));
                    measurements.add(measurement);
                }
                else
                {
                    Measurement measurement = new Measurement(Double.parseDouble(measurementSplit[1]),testMethodRepository
                            .findByName(measurementSplit[0]),sample,date);
                    measurements.add(measurement);
                }
            }

            sample.setMeasurements(measurements);
            return sample;
        }catch(ParseException e)
        {
            return null;
        }


    }

    public List<String[]> format(String content)
    {
        List<String[]> list = new ArrayList<>();
        String[] lines = content.split("\\r\\n");


        for(int i=0;lines.length>i;i++ )
        {
            if(lines[i].startsWith("Type") && headerSet == false)
            {
                setHeader(lines[i].split("\\t"));
                headerSet =true;

            }
            if(lines[i].startsWith("Unknown"))
            {
                list.add(lines[i].split("\\t"));
            }
        }


        return list;
    }

}



























