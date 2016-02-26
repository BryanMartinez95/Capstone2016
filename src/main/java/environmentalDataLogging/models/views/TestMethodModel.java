package environmentalDataLogging.models.views;

import environmentalDataLogging.entities.Device;

import java.util.UUID;

/**The TestMethod model class is a copy to the TestMethod entity.
 * A Test Method represents a list of test methods for devices.
 */
public class TestMethodModel
{
	/**
	 * The unique auto generated id for a Test Method
	 */
	private UUID id;
	
	/**
	 *The value of the test method
	 */
	private String name;

	/**
	 * The device associated with the Test Method
	 */
	private Device device;
	
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
	 * Gets device.
	 *
	 * @return the device
	 */
	public Device getDevice()
	{
		return device;
	}

	/**
	 * Sets name.
	 *
	 * @param device the device
	 */
	public void setDevice(Device device)
	{
		this.device = device;
	}
}
