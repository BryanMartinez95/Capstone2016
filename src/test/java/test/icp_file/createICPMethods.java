package test.icp_file;

import org.junit.Test;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;

/**
 * Created by 631152 on 2/8/2016.
 */
public class createICPMethods
{

    @Test
    public void test()
    {
        try
        {
            String content = new String(Files.readAllBytes(Paths.get("resource/test.txt")));
            BufferedWriter bw = new BufferedWriter(new FileWriter("resource/testMethodsData.json"));

            String[] testMethods = content.split("\\s+");


            bw.write("{\n\"cols\": [\n \"name\" \n], \"data\": [\n");

            for(int i =0;testMethods.length> i;i++)
            {
                bw.write("\n[\n\"" + testMethods[i]  + "\",\n\"ICP\"\n],");
            }


            bw.write("\n]\n}");
            bw.close();


        } catch (IOException  e) {
            e.printStackTrace();
        }
    }
}
