package environmentalDataLogging.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotNull;
import java.util.Comparator;

/**
 * The type Test method.
 */
@Entity
public class TestMethod extends BaseEntity
{
    /**
     * The value of the unit of measure
     */
    @NotNull
    @Column(unique = true, nullable = false)
    private String name;

    /**
     * The reporting alias of this test method
     */
    private String alias;

    /**
     * The device in which this test method belongs to
     */
    @ManyToOne
    private Device device;

    /**
     * Instantiates a new Test method.
     */
    public TestMethod()
    {

    }

    /**
     * Instantiates a new Test method.
     *
     * @param name the name
     */
    public TestMethod(String name)
    {
        this.name = name;
        this.alias = name;
    }

    /**
     * Instantiates a new Test method.
     *
     * @param name   the name
     * @param device the device
     */
    public TestMethod(String name, Device device)
    {
        this.name = name;
        this.alias = name;
        this.device = device;
    }

    /**
     * Gets name.
     *
     * @return the name
     */
    public String getName()
    {
        return name;
    }

    /**
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name)
    {
        this.name = name;
    }

    /**
     * Gets alias.
     *
     * @return the alias
     */
    public String getAlias()
    {
        return alias;
    }

    /**
     * Sets alias.
     *
     * @param alias the alias
     */
    public void setAlias(String alias)
    {
        this.alias = alias;
    }

    /**
     * Gets device.
     *
     * @return the device
     */
    public Device getDevice()
    {
        return device;
    }

    /**
     * Sets device.
     *
     * @param device the device
     */
    public void setDevice(Device device)
    {
        this.device = device;
    }

    /**
     * The Name comparator.
     */
    public static Comparator<TestMethod> nameComparator = (o1, o2) -> o1.getName().compareTo(o2.getName());
}
