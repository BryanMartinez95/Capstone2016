package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.repositories.IUnitRepository;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.exceptions.InvalidImportException;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;


/**
 * This class is used for the device TOC/TN to read in files to save to the database
 */
public class TOCParser extends DeviceParser
{

    /**
     * The Test method repository.
     */
    ITestMethodRepository testMethodRepository;
    /**
     * The User repository.
     */
    IUserRepository userRepository;
    /**
     * The Unit repository.
     */
    IUnitRepository unitRepository;
    /**
     * The header of the file
     */
    private String[] header;
    /**
     * the device the file belongs to
     */
    private Device device;
    /**
     * The Date.
     */
    Date date;
    /**
     * The Header set.
     */
    boolean headerSet = false;
    /**
     * The Sample.
     */
    Sample sample;
    /**
     * the date formatting the file uses
     */
    DateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm:ss a");

    /**
     * Instantiates a new Toc parser.
     *
     * @param deviceRepository     the device repository
     * @param testMethodRepository the test method repository
     * @param unitRepository       the unit repository
     * @param userRepository       the user repository
     */
    public TOCParser(IDeviceRepository deviceRepository, ITestMethodRepository testMethodRepository,IUnitRepository
            unitRepository,IUserRepository userRepository)
    {
        this.unitRepository = unitRepository;
        this.testMethodRepository = testMethodRepository;
        device = deviceRepository.findByName("TOC/TN");
        this.userRepository=userRepository;
    }

    /**
     * This particular parser does not require a header
     * @param header
     */
    @Override
    public void setHeader(String[] header)
    {

    }

    /**This method takes in a row/line and creates a sample in the process
     *
     * @param line
     * @param samples
     * @param labid
     * @return
     * @throws InvalidImportException
     */
    @Override
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
                this.sample = new Sample(labid,date, Status.ACTIVE,device, LocalDate.now(),userRepository
                        .findByEmail("SYSTEM").getId());
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
                    this.sample = new Sample(labid,date, Status.ACTIVE,device, LocalDate.now(),userRepository
                            .findByEmail("SYSTEM").getId());
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
                            .findByName(measurementSplit[0]),sample,date,unitRepository.findByName("mg/L"),Status.ACTIVE);
                    measurements.add(measurement);
                }
                else
                {
                    Measurement measurement = new Measurement(Double.parseDouble(measurementSplit[1]),testMethodRepository
                            .findByName(measurementSplit[0]),sample,date,Status.ACTIVE);
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

    /** This device has two possibilities for a lab id, this method checks which one it is
     *
     * @param line
     * @return
     */
    @Override
    public String setLabId(String[] line)
    {
        String labId=null;
        if(line[2].equalsIgnoreCase("") || line[2].equalsIgnoreCase(null))
        {
            labId = line[3];
        }
        else{
            labId = line[2];
        }
        return labId;
    }

    /**This removes any unnecessary information from the file
     *
     * @param content
     * @return
     */
    @Override
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



























