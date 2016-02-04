package environmentalDataLogging.parsers;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by 631152 on 1/28/2016.
 */
public class ICPParser
{
    private List<String> header;
    public void setHeader()
    {
        header = new ArrayList();
        for (String val: header)
        {
            System.out.println(val);
        }

    }
    public void parse()
    {
    }

    /**
     * if line starts with published, ignore it
     * remove all header repeats
     */
    public String format(String content)
    {
        return content = content.replaceAll("(?m)^[ \t]*\r?\n", "");
    }
}
