package test.testingTemplates;


import com.github.springtestdbunit.DbUnitTestExecutionListener;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

/**
 * Created by 631152 on 1/12/2016.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = TestContextConfiguration.class)
@TestExecutionListeners({DependencyInjectionTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        DbUnitTestExecutionListener.class})
public class TemplateTest
{
    private static boolean setUpIsDone = false;
    @Before
    public void setup()
    {

    }

    @Test
    public void test1()
    {
        System.out.println("hello");
    }

    @Test
    @Ignore
    public void test2(){
        System.out.println("Ignore me pls");
    }
}
