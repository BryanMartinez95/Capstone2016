package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Comparator;
import java.util.Set;
import java.util.function.Predicate;

/**
 * The Device entity class is the link to the device table in the EnviroDB database.
 * A Device is used by the Environmental Technologies lab to create samples.
 */
@Entity
public class Device extends BaseEntity
{
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

    /**
     * Instantiates a new Device.
     */
    public Device()
    {

    }

    /**
     * Instantiates a new Device.
     *
     * @param name   the name
     * @param status the status
     */
    public Device(String name, Status status)
    {
        this.name = name;
        this.status = status;
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

    /**
     * Gets samples.
     *
     * @return the samples
     */
    public Set<Sample> getSamples()
    {
        return samples;
    }

    /**
     * Sets samples.
     *
     * @param samples the samples
     */
    public void setSamples(Set<Sample> samples)
    {
        this.samples = samples;
    }

    /**
     * The Name comparator.
     */
    public static Comparator<Device> nameComparator = (o1, o2) -> o1.getName().compareToIgnoreCase(o2.getName());

    public static Predicate<Device> namePredicate(String value)
    {
        return p -> p.getName() != null && p.getName().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Device> statusPredicate(String value)
    {
        return p -> p.getStatus().equals(Status.valueOf(value.toUpperCase()));
    }
}
