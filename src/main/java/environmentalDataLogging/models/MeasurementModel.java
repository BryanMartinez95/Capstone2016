package environmentalDataLogging.models;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.Substance;
import environmentalDataLogging.entities.UnitOfMeasure;
import java.util.UUID;
import javax.persistence.ManyToOne;

/**
 * The MeasurementModel class is a copy to the Measurement entity.
 * A Measurement contains all the information relating to the measurement of a sample.
 */
public class MeasurementModel
{
    /**
     *
     */
    private UUID id;

    /**
     *
     */
    private double value;

    /**
     *
     */
    private Sample sample;

    /**
     *
     */
    private Substance substance;

    /**
     *
     */
    private UnitOfMeasure unitOfMeasure;

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
     * Gets substance.
     *
     * @return the substance
     */
    public Substance getSubstance()
    {
        return substance;
    }

    /**
     * Sets substance.
     *
     * @param substance the substance
     */
    public void setSubstance(Substance substance)
    {
        this.substance = substance;
    }

    /**
     * Gets unit of measure.
     *
     * @return the unit of measure
     */
    public UnitOfMeasure getUnitOfMeasure()
    {
        return unitOfMeasure;
    }

    /**
     * Sets unit of measure.
     *
     * @param unitOfMeasure the unit of measure
     */
    public void setUnitOfMeasure(UnitOfMeasure unitOfMeasure)
    {
        this.unitOfMeasure = unitOfMeasure;
    }

    /**
     * Gets sample.
     *
     * @return the sample
     */
    public Sample getSample() {
        return sample;
    }

    /**
     * Sets sample.
     *
     * @param sample the sample
     */
    public void setSample(Sample sample) {
        this.sample = sample;
    }
}
