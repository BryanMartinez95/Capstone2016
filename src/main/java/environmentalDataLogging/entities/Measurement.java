package environmentalDataLogging.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.UUID;

/**
 * The Measurement entity class is the link to the measurement table in the EnviroDB database.
 *  A Measurement contains all the information relating to the measurement of a sample.
 *
 */
@Entity
public class Measurement
{
    /**
     *The unique auto generated id for a measurement
     */
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     * The numerical value of the measurement
     */
    @NotNull
    private double value;


    /**
     * The sample in which the measurement belongs to
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @NotNull
    private Sample sample;

    /**
     * The type of substance the measurement is
     */
    @ManyToOne
    private Substance substance;

    /**
     * The unit in which the measurement is measured in
     */
    @OneToOne
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
