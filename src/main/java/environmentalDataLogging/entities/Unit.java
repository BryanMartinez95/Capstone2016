package environmentalDataLogging.entities;

import java.util.Set;
import java.util.UUID;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;

/**The Unit entity class is the link to the unit_of_measure table in the EnviroDB database.
 * A Unit represents a list of hardcoded unit of measure within the measurement.
 */
@Entity
public class Unit
{
    /**
     * The unique auto generated id for a Unit
     */
    @Id
    @org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

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

    /**
     * Gets id.
     *
     * @return the id
     */
    public UUID getId()
    {
        return id;
    }




}
