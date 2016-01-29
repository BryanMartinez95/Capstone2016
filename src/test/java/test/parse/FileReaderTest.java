package test.parse;

import environmentalDataLogging.tasks.FileReader;
import org.junit.Before;
import org.junit.Test;

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
    public void test1()
    {
        fileReader.deviceSelector("string");
    }
}
