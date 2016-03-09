package environmentalDataLogging.parsers;


import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.tasks.InvalidImportException;

import java.util.List;

public abstract class DeviceParser
{
    public abstract List<String[]> format(String content);
    public abstract void setHeader(String[] header);
    public  Sample parse(String[] line, List<Sample> samples, String labid) throws InvalidImportException{
        throw new UnsupportedOperationException();
    }

    public abstract String setLabId(String[] line);

}
