package environmentalDataLogging.models.views;

import java.util.UUID;

/**The SubstanceModel class is a copy to the Substance entity.
 *  A Substance represents the name of the substance within a measurement
 */
public class SubstanceModel
{
    /**
     * The unique auto generated id for a substance
     */
    private UUID id;

    /**
     * The name of the substance
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
