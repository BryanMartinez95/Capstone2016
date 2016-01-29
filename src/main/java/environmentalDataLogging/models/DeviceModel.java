package environmentalDataLogging.models;

import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.Status;
import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

/**
 * The DeviceModel class is a copy to the Device entity.
 * A Device is used by the Environmental Technologies lab to create samples.
 */
public class DeviceModel
{

    /**
     *The unique auto generated id for a device
     */
    private UUID id;

    /**
     *The name of the device
     */
    private String name;

    /**
     *The list of samples that belong to the device
     */
    private Set<Sample> samples;


    /**
     *The device's status specifying whether the device is active or inactive
     */
    private Status status;



    /**
     * A optional comment/description of the device
     */
    private String comment;

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
}
