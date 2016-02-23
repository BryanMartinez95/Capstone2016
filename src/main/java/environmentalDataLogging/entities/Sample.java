package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;
import org.hibernate.annotations.Fetch;
import org.springframework.data.repository.cdi.Eager;

import javax.annotation.Nullable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;

/**The Sample entity class is the link to the sample table in the EnviroDB database.
 * A Sample represents a result sample the Environmental labs obtains once
 * finished running a experiment
 */
@Entity
public class Sample extends BaseEntity
{
    /**
     * The environmental technologies lab generated sample id
     */
    @Column(unique = true, nullable = false)
    private String labId;

    /**
     * The list of measurements a sample contains
     */
    @OneToMany(mappedBy = "sample",fetch = FetchType.EAGER)
    private Set<Measurement> measurements;

    /**
     * The date the sample was created
     */
    @NotNull
    private Date date;

    /**
     * The status of the sample specifying whether the sample is active or inactive
     */
    @NotNull
    private Status status;

    /**
     * A description/comment of the sample
     */
    private String comment;


    /**
     * The device which created this sample
     */
    @ManyToOne
    @NotNull
    private Device device;

    /**
     * The project the sample belongs to
     */
    @ManyToOne
    @Nullable
    private Project project;

    public SampleIdentifier getSampleIdentifier()
    {
        return sampleIdentifier;
    }

    public void setSampleIdentifier(SampleIdentifier sampleIdentifier)
    {
        this.sampleIdentifier = sampleIdentifier;
    }

    /**
     * The unique 3 value ID for the sample
     */
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
    private SampleIdentifier sampleIdentifier;

    public Sample()
    {

    }

    public Sample(String labId, Date date, Status status, Device device, Project project)
    {
        this.labId = labId;
        this.date = date;
        this.status = status;
        this.device = device;
        this.project = project;
    }
    public Sample(String labId, Date date, Status status, Device device,String comment)
    {
        this.labId = labId;
        this.date = date;
        this.status = status;
        this.device = device;
        this.comment=comment;
    }
    public Sample(String labId, Date date, Status status, Device device)
    {
        this.labId = labId;
        this.date = date;
        this.status = status;
        this.device = device;
    }
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

    public String getLabId() {
        return labId;
    }

    public void setLabId(String labSampleId) {
        this.labId = labId;
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

    @Override
    public String toString()
    {
        return "Sample{" +
                "labId='" + labId + '\'' +
                ", date=" + date +
                ", status=" + status +
                ", comment='" + comment + '\'' +
                ", device=" + device +
                '}';
    }

    @PrePersist
    @PreUpdate
    public void saveMeasurements()
    {

    }
}
