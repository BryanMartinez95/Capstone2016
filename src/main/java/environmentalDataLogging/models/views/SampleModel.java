package environmentalDataLogging.models.views;

import environmentalDataLogging.entities.Measurement;
import environmentalDataLogging.entities.SampleIdentifier;
import environmentalDataLogging.enums.Status;
import java.util.Date;
import java.util.Set;
import java.util.UUID;

/**
 * The SampleModel class is a copy to the Sample entity.
 *  A Sample represents a result sample the Environmental labs obtains once
 * finished running a experiment
 */
public class SampleModel
{
    /**
     *The unique auto generated id for a sample
     */
    private UUID id;

    /**
     * The list of measurements a sample contains
     */
    private Set<Measurement> measurements;

	/**
	 * The id for the sample identifier
	 */
	private UUID sampleIdentifierId;

	/**
	 * The first of the three unique value IDs for the sample
	 */
	private String companyName;

	/**
	 * The second of the three unique value IDs for the sample
	 */
	private String creationDate;

	/**
	 * The third of the three unique value IDs for the sample
	 */
	private String sampleIdentity;

	/**
	 * The environmental technologies lab generated sample id
	 */
    private String labId;

    /**
     *The date the sample was created
     */
    private Date date;

    /**
     *A description/comment of the sample
     */
    private String comment;

    /**
     * The device id which created this sample
     */
    private UUID deviceId;

	/**
	 * The device name which created this sample
	 */
	private String deviceName;

    /**
     * The project id the sample belongs to
     */
    private UUID projectId;

	/**
	 * The project name the sample belongs to
	 */
	private String projectName;

	/**
	 *The status of the sample specifying whether the sample is active or inactive
	 */
	private Status status;

    public SampleModel()
    {
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
     * Gets sampleIdentifierId.
     *
     * @return sampleIdentifierId
     */
    public UUID getSampleIdentifierId()
    {
        return sampleIdentifierId;
    }

    /**
     * Sets sampleIdentifierId.
     *
     * @param sampleIdentifierId the sampleIdentifierId
     */
    public void setSampleIdentifierId(UUID sampleIdentifierId)
    {
        this.sampleIdentifierId = sampleIdentifierId;
    }

	/**
	 * Gets companyName.
	 *
	 * @return companyName
	 */
	public String getCompanyName()
	{
		return companyName;
	}

	/**
	 * Sets companyName.
	 *
	 * @param companyName the companyName
	 */
	public void setCompanyName(String companyName)
	{
		this.companyName = companyName;
	}

	/**
	 * Gets creationDate.
	 *
	 * @return creationDate
	 */
	public String getCreationDate()
	{
		return creationDate;
	}

	/**
	 * Sets creationDate.
	 *
	 * @param creationDate the creationDate
	 */
	public void setCreationDate(String creationDate)
	{
		this.creationDate = creationDate;
	}

	/**
	 * Gets sampleIdentity.
	 *
	 * @return sampleIdentity
	 */
	public String getSampleIdentity()
	{
		return sampleIdentity;
	}

	/**
	 * Sets sampleIdentity.
	 *
	 * @param sampleIdentity the sampleIdentity
	 */
	public void setSampleIdentity(String sampleIdentity)
	{
		this.sampleIdentity = sampleIdentity;
	}

	/**
	 * Gets labId.
	 *
	 * @return the labId
	 */
	public String getLabId() {
		return labId;
	}

	/**
	 * Sets labId.
	 *
	 * @param labId the labId
	 */
	public void setLabId(String labId) {
		this.labId = labId;
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
     * Gets project id.
     *
     * @return the project id
     */
    public UUID getProjectId() {
        return projectId;
    }

    /**
     * Sets project id.
     *
     * @param projectId the project id
     */
    public void setProjectId(UUID projectId) {
        this.projectId = projectId;
    }

	/**
	 * Gets project name.
	 *
	 * @return the project name
	 */
	public String getProjectName() {
		return projectName;
	}

	/**
	 * Sets project name.
	 *
	 * @param projectName the project name
	 */
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

    /**
     * Gets device id.
     *
     * @return the device id
     */
    public UUID getDeviceId() {
        return deviceId;
    }

    /**
     * Sets device id.
     *
     * @param deviceId the device id
     */
    public void setDeviceId(UUID deviceId) {
        this.deviceId = deviceId;
    }

	/**
	 * Gets device name.
	 *
	 * @return the device name
	 */
	public String getDeviceName() {
		return deviceName;
	}

	/**
	 * Sets device name.
	 *
	 * @param deviceName the device name
	 */
	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
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
}
