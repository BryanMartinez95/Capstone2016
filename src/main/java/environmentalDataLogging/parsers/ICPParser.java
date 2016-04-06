package environmentalDataLogging.parsers;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import environmentalDataLogging.repositories.IDeviceRepository;
import environmentalDataLogging.repositories.ITestMethodRepository;
import environmentalDataLogging.repositories.IUserRepository;
import environmentalDataLogging.exceptions.InvalidImportException;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.*;


/**
 * This class is used for the device ICP to read in files to save to the database
 */
public class ICPParser extends DeviceParser
{

    /**
     * The Test method repository.
     */
    ITestMethodRepository testMethodRepository;
    /**
     * The User repository.
     */
    IUserRepository userRepository;
    private String[] header;
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
     * The Format.
     */
    DateFormat format = new SimpleDateFormat("MM/dd/yyyy hh:mm:ssa");
    /**
     * The Sample.
     */
    Sample sample;

    /**
     * Instantiates a new Icp parser.
     *
     * @param deviceRepository     the device repository
     * @param testMethodRepository the test method repository
     * @param userRepository       the user repository
     */
    public ICPParser(IDeviceRepository deviceRepository, ITestMethodRepository testMethodRepository, IUserRepository userRepository)
    {
        this.testMethodRepository = testMethodRepository;
        device = deviceRepository.findByName("ICP");
        this.userRepository = userRepository;
    }

    /**
     * This method sets the header used to build samples
     *
     * @param header
     */
    @Override
    public void setHeader(String[] header)
    {
        this.header = header;
    }

    /**
     * This method takes in a row/line and creates a sample in the process
     *
     * @param line
     * @param samples
     * @param labId
     * @return
     * @throws InvalidImportException
     */
    @Override
    public Sample parse(String[] line, List<Sample> samples, String labId) throws InvalidImportException
    {
        Set<Measurement> measurements = new HashSet<>();
        if (line.length != 202)
        {
            throw new InvalidImportException("Sample error");
        }

        try
        {
            if (!line[0].endsWith("M"))
            {
                line[0] = line[0] + "M";
            }
            date = format.parse(line[0]);
            if (samples.size() == 0)
            {
                this.sample = new Sample(line[4], date, Status.ACTIVE, device, LocalDate.now(), userRepository
                        .findByEmail("SYSTEM").getId());

            }
            for (Sample sample : samples)
            {
                if (sample.getLabId().equalsIgnoreCase(line[4]))
                {
                    this.sample = sample;
                    measurements = sample.getMeasurements();
                    break;
                }
                else
                {
                    this.sample = new Sample(line[4], date, Status.ACTIVE, device, LocalDate.now(), userRepository
                            .findByEmail("SYSTEM").getId());
                    break;
                }
            }
            for (int i = 11; line.length > i; i++)
            {
                if (!line[i].equalsIgnoreCase(""))
                {
                    try
                    {
                        Measurement measurement = new Measurement(Double.parseDouble(line[i]), testMethodRepository
                                .findByName(header[i]), sample, date, Status.ACTIVE);

                        measurements.add(measurement);

                    }
                    catch (NumberFormatException e)
                    {
                        // //  catches invalid numbers
                    }

                }
            }
            sample.setMeasurements(measurements);

            return sample;

        }
        catch (ParseException e)
        {
            e.printStackTrace();
            return null;
        }


    }

    @Override
    public String setLabId(String[] line)
    {
        return line[1];
    }

    /**
     * if line starts with published, ignore it
     * remove all header repeats
     * ignore all lines we dont need
     *
     * @param content
     * @return
     */
    @Override
    public List<String[]> format(String content)
    {
        List<String[]> list = new ArrayList<>();
        String[] lines = content.split("\\r\\n");
        for (int i = 0; lines.length > i; i++)
        {
            if (lines[i].contains("Ag3280") && headerSet == false)
            {
                setHeader(lines[i].split(",", -1));

                headerSet = true;
            }
            else if (lines[i].matches("(\\d).+"))
            {
                String[] split = lines[i].split(",", -1);
                if (split[4].startsWith("Blank") || split[4].startsWith("Calibration") || split[4].startsWith
                        ("CalibStd") || split[4].startsWith("MDL") || split[4].equalsIgnoreCase("") || split[4]
                        .startsWith("IPC") || split[4].startsWith("Calib.") || split[4].startsWith("QCS"))
                {

                }
                else
                {
                    list.add(split);
                }

            }

        }
        return list;
    }
}
