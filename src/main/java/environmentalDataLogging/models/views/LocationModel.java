package environmentalDataLogging.models.views;

import environmentalDataLogging.enums.Status;
import java.util.UUID;

/**
 * The LocationModel class is a copy to the Location entity.
 *  A location contains all the information relating possible locations
 * for the environmental technologies lab
 */
public class LocationModel
{
    /**
     *The unique auto generated id for a location
     */
    private UUID id;

    /**
     *The name of the location
     */
    private String name;

    /**
     *A comment/description of the location
     */
    private String comment;

    /**
     *The status of the location specifying whether the location is active or inactive
     */
    private Status status;

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

    /**
     * Gets comment.
     *
     * @return the comment
     */
    public String getComment()
    {
        return comment;
    }

    /**
     * Sets comment.
     *
     * @param comment the comment
     */
    public void setComment(String comment)
    {
        this.comment = comment;
    }

    /**
     * Gets status.
     *
     * @return the status
     */
    public Status getStatus()
    {
        return status;
    }

    /**
     * Sets status.
     *
     * @param status the status
     */
    public void setStatus(Status status)
    {
        this.status = status;
    }
}
