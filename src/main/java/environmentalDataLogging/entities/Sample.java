package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.annotation.Nullable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.Date;
import java.util.Set;
import java.util.UUID;
import java.util.function.Predicate;

/**
 * The Sample entity class is the link to the sample table in the EnviroDB database.
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
    @OneToMany(mappedBy = "sample", fetch = FetchType.EAGER)
    private Set<Measurement> measurements;

    /**
     * The unique 3 value ID for the sample
     */
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
    private SampleIdentifier sampleIdentifier;

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

    /**
     * Instantiates a new Sample.
     */
    public Sample()
    {

    }

    /**
     * Instantiates a new Sample.
     *
     * @param labId   the lab id
     * @param date    the date
     * @param status  the status
     * @param device  the device
     * @param project the project
     */
    public Sample(String labId, Date date, Status status, Device device, Project project)
    {
        this.labId = labId;
        this.date = date;
        this.status = status;
        this.device = device;
        this.project = project;
    }

    /**
     * Instantiates a new Sample.
     *
     * @param labId     the lab id
     * @param date      the date
     * @param status    the status
     * @param device    the device
     * @param comment   the comment
     * @param dateAdded the date added
     * @param addedBy   the added by
     */
    public Sample(String labId, Date date, Status status, Device device, String comment, LocalDate dateAdded, UUID
            addedBy)
    {
        this.labId = labId;
        this.date = date;
        this.status = status;
        this.device = device;
        this.comment = comment;
        this.setDateAdded(dateAdded);
        this.setAddedBy(addedBy);
    }

    /**
     * Instantiates a new Sample.
     *
     * @param labId     the lab id
     * @param date      the date
     * @param status    the status
     * @param device    the device
     * @param dateAdded the date added
     * @param addedBy   the added by
     */
    public Sample(String labId, Date date, Status status, Device device, LocalDate dateAdded, UUID
            addedBy)
    {
        this.labId = labId;
        this.date = date;
        this.status = status;
        this.device = device;
        this.setDateAdded(dateAdded);
        this.setAddedBy(addedBy);
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

    /**
     * Gets labId.
     *
     * @return the labId
     */
    public String getLabId()
    {
        return labId;
    }

    /**
     * Sets labId.
     *
     * @param labId the labId
     */
    public void setLabId(String labId)
    {
        this.labId = labId;
    }

    /**
     * Gets sampleIdentifier.
     *
     * @return the sampleIdentifier
     */
    public SampleIdentifier getSampleIdentifier()
    {
        return sampleIdentifier;
    }

    /**
     * Sets sampleIdentifier.
     *
     * @param sampleIdentifier the sampleIdentifier
     */
    public void setSampleIdentifier(SampleIdentifier sampleIdentifier)
    {
        this.sampleIdentifier = sampleIdentifier;
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
    public Project getProject()
    {
        return project;
    }

    /**
     * Sets project.
     *
     * @param project the project
     */
    public void setProject(Project project)
    {
        this.project = project;
    }

    /**
     * Gets device.
     *
     * @return the device
     */
    public Device getDevice()
    {
        return device;
    }

    /**
     * Sets device.
     *
     * @param device the device
     */
    public void setDevice(Device device)
    {
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

    /**
     * Save measurements.
     */
    @PrePersist
    @PreUpdate
    public void saveMeasurements()
    {

    }

    /**
     * The Lab id comparator.
     */
    public static Comparator<Sample> labIdComparator = (o1, o2) -> o1.getLabId().compareToIgnoreCase(o2.getLabId());

    /**
     * The Date comparator.
     */
    public static Comparator<Sample> dateComparator = (o1, o2) -> o1.getDate().compareTo(o2.getDate());

    public static Predicate<Sample> labIdPredicate(String value)
    {
        return p -> p.getLabId().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Sample> companyNamePredicate(String value)
    {
        return p -> p.getSampleIdentifier() != null && p.getSampleIdentifier().getCompanyName() != null && p.getSampleIdentifier().getCompanyName().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Sample> creationDatePredicate(String value)
    {
        return p -> p.getSampleIdentifier() != null && p.getSampleIdentifier().getCreationDate() != null && p.getSampleIdentifier().getCreationDate().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Sample> sampleIdentityPredicate(String value)
    {
        return p -> p.getSampleIdentifier() != null && p.getSampleIdentifier().getSampleIdentity() != null && p.getSampleIdentifier().getSampleIdentity().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Sample> deviceNamePredicate(String value)
    {
        return p -> p.getDevice().getName().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Sample> projectNamePredicate(String value)
    {
        return p -> p.getProject() != null && p.getProject().getName() != null && p.getProject().getName().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<User> statusPredicate(Status value)
    {
        return p -> p.getStatus().equals(value);
    }

}
