package environmentalDataLogging.models;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.Substance;
import environmentalDataLogging.entities.UnitOfMeasure;
import java.util.UUID;
import javax.persistence.ManyToOne;

public class MeasurementModel
{
    private UUID id;
    private double value;



    private Sample sample;

    private Substance substance;

    private UnitOfMeasure unitOfMeasure;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public double getValue()
    {
        return value;
    }

    public void setValue(double value)
    {
        this.value = value;
    }

    public Substance getSubstance()
    {
        return substance;
    }

    public void setSubstance(Substance substance)
    {
        this.substance = substance;
    }

    public UnitOfMeasure getUnitOfMeasure()
    {
        return unitOfMeasure;
    }

    public void setUnitOfMeasure(UnitOfMeasure unitOfMeasure)
    {
        this.unitOfMeasure = unitOfMeasure;
    }

    public Sample getSample() {
        return sample;
    }

    public void setSample(Sample sample) {
        this.sample = sample;
    }
}
