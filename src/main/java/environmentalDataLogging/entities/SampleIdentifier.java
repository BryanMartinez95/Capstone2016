package environmentalDataLogging.entities;

import javax.persistence.Entity;
import java.util.Comparator;

/**
 * The SampleId entity class is the link to the sample_id table in the EnviroDB database.
 * A SampleId three values that uniquely create a project ID when combined together
 * Format XXXXYYYYZZZZ
 */
@Entity
public class SampleIdentifier extends BaseEntity
{
    private String companyName;

    private String creationDate;

    private String sampleIdentity;

    /**
     * Instantiates a new Sample identifier.
     */
    public SampleIdentifier()
    {
    }

    /**
     * Instantiates a new Sample identifier.
     *
     * @param companyName    the company name
     * @param creationDate   the creation date
     * @param sampleIdentity the sample identity
     */
    public SampleIdentifier(String companyName, String creationDate, String sampleIdentity)
    {
        this.companyName = companyName;
        this.creationDate = creationDate;
        this.sampleIdentity = sampleIdentity;
    }

    /**
     * Gets company name.
     *
     * @return the company name
     */
    public String getCompanyName()
    {
        return companyName;
    }

    /**
     * Sets company name.
     *
     * @param companyName the company name
     */
    public void setCompanyName(String companyName)
    {
        this.companyName = companyName;
    }

    /**
     * Gets creation date.
     *
     * @return the creation date
     */
    public String getCreationDate()
    {
        return creationDate;
    }

    /**
     * Sets creation date.
     *
     * @param creationDate the creation date
     */
    public void setCreationDate(String creationDate)
    {
        this.creationDate = creationDate;
    }

    /**
     * Gets sample identity.
     *
     * @return the sample identity
     */
    public String getSampleIdentity()
    {
        return sampleIdentity;
    }

    /**
     * Sets sample identity.
     *
     * @param sampleIdentity the sample identity
     */
    public void setSampleIdentity(String sampleIdentity)
    {
        this.sampleIdentity = sampleIdentity;
    }


}
