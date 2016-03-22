package environmentalDataLogging.models.views;

import environmentalDataLogging.entities.Unit;

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
     *The unit in which the measurement is measured in
     */
    private Unit unit;

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
     * Gets unit of measure.
     *
     * @return the unit of measure
     */
    public Unit getUnit()
    {
        return unit;
    }

    /**
     * Sets unit of measure.
     *
     * @param unit the unit of measure
     */
    public void setUnit(Unit unit)
    {
        this.unit = unit;
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
}
