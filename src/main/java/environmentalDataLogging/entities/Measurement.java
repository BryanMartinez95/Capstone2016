package environmentalDataLogging.entities;

import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Measurement
{
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;
    private double value;

    @ManyToOne
    private Substance substance;

    @ManyToOne
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
}
