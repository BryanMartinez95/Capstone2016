package test.parse;

import environmentalDataLogging.tasks.FileReader;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import java.io.IOException;

/**
 * Created by 631152 on 1/28/2016.
 */
public class FileReaderTest
{
    FileReader fileReader;
    @Before
    public void setup()
    {
        fileReader=new FileReader();
    }
    @Test
    public void deviceSelector1Test()
    {
        try
        {
            fileReader.deviceController("string");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
    }
    @Test
    @Ignore
    public void deviceSelector2Test()
    {
        try
        {
            fileReader.deviceController("string");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
    }

}
