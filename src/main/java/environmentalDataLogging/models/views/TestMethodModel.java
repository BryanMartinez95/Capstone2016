package environmentalDataLogging.models.views;

import java.util.UUID;

/**
 * The TestMethod model class is a copy to the TestMethod entity.
 * A Test Method represents a list of test methods for devices.
 */
public class TestMethodModel
{
    /**
     * The unique auto generated id for a Test Method
     */
    private UUID id;

    /**
     * The value of the test method
     */
    private String name;

    /**
     * The reporting alias of this test method
     */
    private String alias;

    /**
     * The device id associated with the Test Method
     */
    private UUID deviceId;

    /**
     * The device name associated with the Test Method
     */
    private String deviceName;

    public TestMethodModel()
    {
    }

    public TestMethodModel(UUID id, String name, UUID deviceId, String deviceName)
    {
        this.id = id;
        this.name = name;
        this.alias= name;
        this.deviceId = deviceId;
        this.deviceName = deviceName;
    }

    /**
     * Gets id.
     *
     * @return the id
     */
    public UUID getId()
    {
        return id;
    }

    /**
     * Sets id.
     *
     * @param id the id
     */
    public void setId(UUID id)
    {
        this.id = id;
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
     * Gets device id.
     *
     * @return the device id
     */
    public UUID getDeviceId()
    {
        return deviceId;
    }

    /**
     * Sets name.
     *
     * @param deviceId the device id
     */
    public void setDeviceId(UUID deviceId)
    {
        this.deviceId = deviceId;
    }

    /**
     * Gets device name.
     *
     * @return the device name
     */
    public String getDeviceName()
    {
        return deviceName;
    }

    /**
     * Sets name.
     *
     * @param deviceName the device name
     */
    public void setDeviceName(String deviceName)
    {
        this.deviceName = deviceName;
    }
}
