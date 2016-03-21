package environmentalDataLogging.models.views;

import environmentalDataLogging.entities.TestMethod;
import environmentalDataLogging.entities.Unit;

import java.util.Date;
import java.util.UUID;

/**
 * The MeasurementModel class is a copy to the Measurement entity.
 * A Measurement contains all the information relating to the measurement of a sample.
 */
public class MeasurementModel
{
    /**
     *The unique auto generated id for a measurement
     */
    private UUID id;

    /**
     * The numerical value of the measurement
     */
    private double value;

    /**
     *The sample id in which the measurement belongs to
     */
    private UUID sampleId;

    /**
     * The numerical value of the temperature
     */
    private double temperature;

	/**
	 *The test method id in which the measurement was measured by
	 */
	private UUID testMethodId;

    /**
     *The unit id in which the measurement is measured in
     */
    private UUID unitId;

	/**
	 *The date when the measurement was entered
	 */
	private Date date;

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
     * Gets value.
     *
     * @return the value
     */
    public double getValue()
    {
        return value;
    }

    /**
     * Sets value.
     *
     * @param value the value
     */
    public void setValue(double value)
    {
        this.value = value;
    }

	/**
	 * Gets temperature.
	 *
	 * @return the temperature
	 */
	public double getTemperature()
	{
		return temperature;
	}

	/**
	 * Sets temperature.
	 *
	 * @param temperature the temperature
	 */
	public void setTemperature(double temperature)
	{
		this.temperature = temperature;
	}

    /**
     * Gets unit id of measure.
     *
     * @return the unit id of measure
     */
    public UUID getUnitId()
    {
        return unitId;
    }

    /**
     * Sets unit id of measure.
     *
     * @param unitId the unit id of measure
     */
    public void setUnitId(UUID unitId)
    {
        this.unitId = unitId;
    }

    /**
     * Gets sample id.
     *
     * @return the sample id
     */
    public UUID getSampleId() {
        return sampleId;
    }

    /**
     * Sets sample id.
     *
     * @param sampleId the sample id
     */
    public void setSampleId(UUID sampleId) {
        this.sampleId = sampleId;
    }

	/**
	 * Gets testMethodId.
	 *
	 * @return the testMethodId
	 */
	public UUID getTestMethodId()
	{
		return testMethodId;
	}

	/**
	 * Sets testMethodId.
	 *
	 * @param testMethodId the testMethodId
	 */
	public void setTestMethodId(UUID testMethodId)
	{
		this.testMethodId = testMethodId;
	}

	/**
	 * Gets date.
	 *
	 * @return the date
	 */
	public Date getDate()
	{
		return date;
	}

	/**
	 * Sets date.
	 *
	 * @param date the date
	 */
	public void setDate(Date date)
	{
		this.date = date;
	}
}
