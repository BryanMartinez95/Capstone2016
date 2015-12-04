package environmentalDataLogging.models;

import environmentalDataLogging.entities.Location;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.enums.DeviceType;
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
     *
     */
    private String name;

    /**
     *
     */
    private Set<Sample> samples;

    /**
     *
     */
    private Location location;

    /**
     *
     */
    private Status status;

    /**
     *
     */
    private DeviceType type;

    /**
     *
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
     * Gets location.
     *
     * @return the location
     */
    public Location getLocation()
    {
        return location;
    }

    /**
     * Sets location.
     *
     * @param location the location
     */
    public void setLocation(Location location)
    {
        this.location = location;
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
     * Gets type.
     *
     * @return the type
     */
    public DeviceType getType()
    {
        return type;
    }

    /**
     * Sets type.
     *
     * @param type the type
     */
    public void setType(DeviceType type)
    {
        this.type = type;
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
