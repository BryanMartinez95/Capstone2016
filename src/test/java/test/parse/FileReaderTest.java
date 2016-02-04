package test.parse;

import environmentalDataLogging.parsers.ICParser;
import environmentalDataLogging.services.ImportService;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

public class FileReaderTest
{
    ImportService importService;
    @Before
    public void setup()
    {
        importService=new ImportService();
    }
    @Test
    //@Ignore
    public void deviceSelector1Test()
    {
        try
        {
            importService.deviceController("filePath");
        } catch (IOException e)
        {
            e.printStackTrace();
        }
    }

    @Test
    @Ignore
    public void fixBryan()
    {
        try {
            ICParser icParser =new ICParser();
            String content = new String(Files.readAllBytes(Paths.get("resource/IC Export.csv")));
            BufferedWriter bw = new BufferedWriter(new FileWriter("resource/Bryanv2.csv"));

            content = icParser.format(content);
            bw.write(content);
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
