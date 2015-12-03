package environmentalDataLogging.models;

import environmentalDataLogging.entities.Alias;
import java.util.Set;
import java.util.UUID;
import javax.persistence.ManyToMany;

/**
 * The type Unit of measure model.
 */
public class UnitOfMeasureModel
{
    /**
     *
     */
    private UUID id;

    /**
     *
     */
    private Set<Alias> aliases;

    /**
     *
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
