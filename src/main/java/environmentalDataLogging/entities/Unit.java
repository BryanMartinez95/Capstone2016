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
     * A list of aliases this unit of measure is associated to
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "unit")
    private Set<Alias> aliases;

    /**
     * The value of the unit of measure
     */
    @NotNull
    private String unit;

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
     * Gets aliases.
     *
     * @return the aliases
     */
    public Set<Alias> getAliases()
    {
        return aliases;
    }

    /**
     * Sets aliases.
     *
     * @param aliases
     */
    public void setAliases(Set<Alias> aliases)
    {
        this.aliases = aliases;
    }

    /**
     * Gets unir.
     *
     * @return the unir
     */
    public String getUnit()
    {
        return unit;
    }

    /**
     * Sets unit.
     *
     * @param unit
     */
    public void setUnit(String unit)
    {
        this.unit = unit;
    }
}
