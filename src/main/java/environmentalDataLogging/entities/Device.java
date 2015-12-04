package environmentalDataLogging.entities;

import environmentalDataLogging.enums.DeviceType;
import environmentalDataLogging.enums.Status;
import java.util.Set;
import java.util.UUID;
import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

@Entity
public class Device
{
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;
    private String name;

    @OneToMany(cascade = CascadeType.PERSIST, mappedBy = "device")
    private Set<Sample> samples;

    @ManyToOne
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

    public Set<Sample> getSamples()
    {
        return samples;
    }

    public void setSamples(Set<Sample> samples)
    {
        this.samples = samples;
    }
}
