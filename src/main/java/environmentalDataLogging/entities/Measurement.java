package environmentalDataLogging.entities;

import javax.annotation.Nullable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * The Measurement entity class is the link to the measurement table in the EnviroDB database.
 *  A Measurement contains all the information relating to the measurement of a sample.
 *
 */
@Entity
public class Measurement extends BaseEntity
{
    /**
     * The numerical value of the measurement
     */
    @NotNull
    private double value;

    /**
     * The sample in which the measurement belongs to
     */
    @ManyToOne(fetch = FetchType.EAGER)
    //@NotNull
    @Nullable
    private Sample sample;

    private double temperature;

    /**
     * The type of substance the measurement is
     */
    @OneToOne
    private TestMethod testMethod;

    /**
     * The unit in which the measurement is measured in
     */
    @OneToOne
    private Unit unit;

    public Measurement()
    {

    }


    public Measurement(double value, TestMethod testMethod, Unit unit)
    {
        this.value = value;
        this.testMethod = testMethod;
        this.unit = unit;
    }
    public Measurement(double value, TestMethod testMethod)
    {
        this.value = value;
        this.testMethod = testMethod;
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
