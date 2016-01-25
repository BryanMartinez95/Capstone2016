package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;
import java.util.Set;
import java.util.UUID;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.GenericGenerator;

/**
 * The Device entity class is the link to the device table in the EnviroDB database.
 * A Device is used by the Environmental Technologies lab to create samples.
 */
@Entity
public class Device
{
    /**
     *The unique auto generated id for a device
     */
    @Id
    @org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     * The name of the device
     */
    @NotNull
    private String name;

    /**
     * The list of samples that belong to the device
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "device")
    private Set<Sample> samples;


    /**
     * The device's status specifying whether the device is active or inactive
     */
    @NotNull
    private Status status;


    /**
     * A optional comment/description of the device
     */
    private String comment;

    public Device()
    {

    }

    public Device(String name, Status status)
    {
        this.name = name;
        this.status = status;
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

    public Set<Sample> getSamples()
    {
        return samples;
    }

    public void setSamples(Set<Sample> samples)
    {
        this.samples = samples;
    }
}
