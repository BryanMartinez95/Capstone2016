package environmentalDataLogging.entities;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import java.util.Comparator;

/**
 * The Unit entity class is the link to the unit_of_measure table in the EnviroDB database.
 * A Unit represents a list of hardcoded unit of measure within the measurement.
 */
@Entity
public class Unit extends BaseEntity
{
    /**
     * The value of the unit of measure
     */
    @NotNull
    private String name;

    public Unit(String name)
    {
        this.name = name;
    }

    public Unit()
    {
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public static Comparator<Unit> nameComparator = (o1, o2) -> o1.getName().compareTo(o2.getName());
}
