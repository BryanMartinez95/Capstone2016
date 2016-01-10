package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;
import java.util.UUID;

/**The Sample entity class is the link to the sample table in the EnviroDB database.
 * A Sample represents a result sample the Environmental labs obtains once
 * finished running a experiment
 */
@Entity
public class Sample
{
    /**
     *The unique auto generated id for a sample
     */
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;



    /**
     * The environmental technologies lab generated sample id
     */
    private String labSampleId;

    /**
     * The list of measurements a sample contains
     */
    @OneToMany(mappedBy = "sample")
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
    private Device device;

    /**
     * The project the sample belongs to
     */
    @ManyToOne
    private Project project;


    /**
     * The unique 3 value ID for the sample
     */
    @OneToOne
    private SampleId sampleId;

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

    public String getLabSampleId() {
        return labSampleId;
    }

    public void setLabSampleId(String labSampleId) {
        this.labSampleId = labSampleId;
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

    public SampleId getSampleId() {
        return sampleId;
    }

    public void setSampleId(SampleId sampleId) {
        this.sampleId = sampleId;
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
