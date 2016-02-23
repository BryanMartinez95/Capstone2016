package environmentalDataLogging.entities;

import javax.annotation.Nullable;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
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

    @ManyToOne
    @Nullable
    private Device device;

    public TestMethod()
    {

    }
    public TestMethod(String name)
    {
        this.name = name;
    }

    public TestMethod(String name, Device device) {
        this.name = name;
        this.device = device;
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
