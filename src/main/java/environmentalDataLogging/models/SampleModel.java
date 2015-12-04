package environmentalDataLogging.models;

import environmentalDataLogging.entities.Device;
import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.Project;
import environmentalDataLogging.enums.Status;
import java.util.Date;
import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

/**
 * The SampleModel class is a copy to the Sample entity.
 *  A Sample represents a result sample the Environmental labs obtains once
 * finished running a experiment
 */
public class SampleModel
{
    /**
     *
     */
    private UUID id;

//    @ManyToOne
//    private Device device;

    /**
     *
     */
    private Set<Measurement> measurements;

    /**
     *
     */
    private Date date;

    /**
     *
     */
    private Status status;

    /**
     *
     */
    private String comment;



    private Device device;

    private Project project;

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

//    public Device getDevice()
//    {
//        return device;
//    }
//
//    public void setDevice(Device device)
//    {
//        this.device = device;
//    }

    /**
     * Gets measurements.
     *
     * @return the measurements
     */
    public Set<Measurement> getMeasurements()
    {
        return measurements;
    }

    /**
     * Sets measurements.
     *
     * @param measurements the measurements
     */
    public void setMeasurements(Set<Measurement> measurements)
    {
        this.measurements = measurements;
    }

    /**
     * Gets date.
     *
     * @return the date
     */
    public Date getDate()
    {
        return date;
    }

    /**
     * Sets date.
     *
     * @param date the date
     */
    public void setDate(Date date)
    {
        this.date = date;
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
     * Gets project.
     *
     * @return the project
     */
    public Project getProject() {
        return project;
    }

    /**
     * Sets project.
     *
     * @param project the project
     */
    public void setProject(Project project) {
        this.project = project;
    }

    /**
     * Gets device.
     *
     * @return the device
     */
    public Device getDevice() {
        return device;
    }

    /**
     * Sets device.
     *
     * @param device the device
     */
    public void setDevice(Device device) {
        this.device = device;
    }
}
