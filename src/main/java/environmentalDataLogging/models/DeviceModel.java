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

public class DeviceModel
{
    private UUID id;
    private String name;

    private Set<Sample> samples;

    private Location location;
    private Status status;
    private DeviceType type;
    private String comment;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Location getLocation()
    {
        return location;
    }

    public void setLocation(Location location)
    {
        this.location = location;
    }

    public Status getStatus()
    {
        return status;
    }

    public void setStatus(Status status)
    {
        this.status = status;
    }

    public DeviceType getType()
    {
        return type;
    }

    public void setType(DeviceType type)
    {
        this.type = type;
    }

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
    }
}
