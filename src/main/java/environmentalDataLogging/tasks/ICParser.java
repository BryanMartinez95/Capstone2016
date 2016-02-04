package environmentalDataLogging.tasks;

import java.util.ArrayList;
import java.util.List;

public class ICParser
{
    private List<String> header;
    public void setHeader(String header)
    {
        header = header.replaceAll("."," ");
        String[] headings = header.split(",");
        for(int i=0;i<headings.length;i++)
        {
            System.out.println(headings[i]);
        }
    }
    public void parse()
    {
    }

    public String format(String content)
    {
        return content =content.replaceAll(";", ",");
    }
}
