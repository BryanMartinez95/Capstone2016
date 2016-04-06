package environmentalDataLogging.parsers;


import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.exceptions.InvalidImportException;

import java.util.List;

/**
 * All parser classes must inherit from DeviceParser
 * Each parser class must contain a method to format, setHeader, parse abd ti set labId
 * <p>
 * Each Device contains its own set of information and own method to parse the data to create new samples
 * The process in which a parser takes in data is, it formats the file(text given) to remove any unnecessary information
 * takes in the header to identify the lab id,date and test methods associated with the device, parses each row and returns a sample per row
 */
public abstract class DeviceParser
{
    public abstract List<String[]> format(String content);

    /**
     * This method sets the header in which is used to identify the location of the labid,date and test methods
     *
     * @param header
     */
    public abstract void setHeader(String[] header);

    /**
     * This method reads in the row given, compares it to the header and returns a sample with all its measurements
     *
     * @param line
     * @param samples
     * @param labid
     * @return
     * @throws InvalidImportException
     */
    public Sample parse(String[] line, List<Sample> samples, String labid) throws InvalidImportException
    {
        throw new UnsupportedOperationException();
    }

    /**
     * This method sets the lab id from the row given
     *
     * @param line
     * @return
     */
    public abstract String setLabId(String[] line);

}
