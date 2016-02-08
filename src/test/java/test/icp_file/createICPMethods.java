package test.icp_file;

import org.junit.Test;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;

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
            BufferedReader br = new BufferedReader(new FileReader("resource/userData.json"));
        } catch (FileNotFoundException e)
        {
            e.printStackTrace();
        }
    }
}
