package environmentalDataLogging.models;

import environmentalDataLogging.entities.Alias;
import java.util.Set;
import java.util.UUID;
import javax.persistence.ManyToMany;

/**The Unit model class is a copy to the Unit entity.
 * A Unit represents a list of hardcoded unit of measure within the measurement.
 */
public class UnitModel
{
    /**
     * The unique auto generated id for a Unit
     */
    private UUID id;

    /**
     *A list of aliases this unit of measure is associated to
     */
    private Set<Alias> aliases;

    /**
     *The value of the unit of measure
     */
    private String type;

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
     * @param aliases the aliases
     */
    public void setAliases(Set<Alias> aliases)
    {
        this.aliases = aliases;
    }

    /**
     * Gets type.
     *
     * @return the type
     */
    public String getType()
    {
        return type;
    }

    /**
     * Sets type.
     *
     * @param type the type
     */
    public void setType(String type)
    {
        this.type = type;
    }
}
