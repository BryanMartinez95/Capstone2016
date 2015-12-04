package environmentalDataLogging.entities;

import java.util.List;
import java.util.Set;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import org.hibernate.annotations.GenericGenerator;

/**The UnitOfMeasure entity class is the link to the unit_of_measure table in the EnviroDB database.
 * A UnitOfMeasure represents a list of hardcoded unit of measure within the measurement.
 */
@Entity
public class UnitOfMeasure
{
    /**
     * The unique auto generated id for a UnitOfMeasure
     */
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     * A list of aliases this unit of measure is associated to
     */
    @ManyToMany
    private Set<Alias> aliases;

    /**
     * The value of the unit of measure
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
