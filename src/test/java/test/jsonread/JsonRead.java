package test.jsonread;


import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Test;

import java.io.FileReader;
import java.io.IOException;
import java.util.List;

/**
 * Created by bmart on 03-Feb-2016.
 */
public class JsonRead {

    @Test
    public void test()
    {
        JSONParser parser = new JSONParser();
        Object obj = null;
        try {

            obj = parser.parse(new FileReader("E:\\Developer\\Repositories\\Capstone.Bryan\\resource\\seedData.txt"));
            JSONObject jsonObject = (JSONObject) obj;

            List<Object> userList = (List<Object>) jsonObject.get("data");
            for(int i=0;userList.size()>i;i++)
            {
                JSONArray jsonArray = (JSONArray) userList.get(i);
                User user = new User((String)jsonArray.get(0),(String)jsonArray.get(1),(String)jsonArray.get(2),Status.valueOf((String) jsonArray.get(3)),(String)jsonArray.get(4),RoleType.valueOf((String) jsonArray.get(5)));
                System.out.println(user.toString());
            }
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ParseException e) {
            e.printStackTrace();
        }


    }
}
