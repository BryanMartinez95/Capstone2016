package environmentalDataLogging.entities;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

/**
 * Created by 631152 on 1/22/2016.
 */
@Entity
public class TestMethod extends BaseEntity
{
    /**
     * The value of the unit of measure
     */
    @NotNull
    private String name;

    public TestMethod()
    {

    }
    public TestMethod(String name)
    {
        this.name = name;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }
}
