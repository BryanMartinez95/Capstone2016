package environmentalDataLogging.tasks;

import java.io.*;

/**
 * Created by 631152 on 1/28/2016.
 */
public class FileReader
{
    ICParser icParser;
    ICPParser icpParser;
    TOCParser tocParser;
    public void deviceSelector(String filepath)
    {
        try
        {
            BufferedReader br = new BufferedReader(new java.io.FileReader("C:/Developer/Data Files/IC EXPORT.csv"));
            BufferedWriter bw = new BufferedWriter(new FileWriter("C:/Developer/Data Files/Bryan.csv"));
           String line;
            while((line =br.readLine()) !=null)
            {

                String modified =line.replaceAll(";", ",");
                bw.write(modified);
                bw.newLine();
                System.out.println(modified);
            }
            bw.close();
            br.close();
        } catch (IOException e)
        {
            e.printStackTrace();
        }


    }
}
