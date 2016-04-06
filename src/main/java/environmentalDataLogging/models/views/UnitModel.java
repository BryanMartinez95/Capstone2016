package environmentalDataLogging.models.views;

import java.util.UUID;

/**
 * The Unit model class is a copy to the Unit entity.
 * A Unit represents a list of hardcoded unit of measure within the measurement.
 */
public class UnitModel
{
    /**
     * The unique auto generated id for a Unit
     */
    private UUID id;


    /**
     * The value of the unit of measure
     */
    private String name;

    public UnitModel()
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
