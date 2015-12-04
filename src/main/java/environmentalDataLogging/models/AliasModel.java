package environmentalDataLogging.models;

import java.util.UUID;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.hibernate.annotations.GenericGenerator;

/**
 * The AliasModel class is a copy to the Alias entity.
 * A Alias is used to specify a unit of measure.
 */
public class AliasModel
{
    /**
     * The unique auto generated id for a alias
     */
    private UUID id;

    /**
     *The name value of a alias
     */
    private String name;

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
     * Gets name.
     *
     * @return the name
     */
    public String getName()
    {
        return name;
    }

    /**
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name)
    {
        this.name = name;
    }
}
