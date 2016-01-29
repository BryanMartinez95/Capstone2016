package environmentalDataLogging.entities;

import javax.persistence.Entity;

/**
 * The SampleId entity class is the link to the sample_id table in the EnviroDB database.
 * A SampleId three values that uniquely create a project ID when combined together
 * Format XXX1111Y222 - XXX
 */
@Entity
public class SampleIdentifier extends BaseEntity {

    private String companyName;

    private String creationDate;

    private String sampleIdentity;

    public SampleIdentifier()
    {
    }

    public SampleIdentifier(String companyName, String creationDate, String sampleIdentity)
    {
        this.companyName = companyName;
        this.creationDate = creationDate;
        this.sampleIdentity = sampleIdentity;
    }

    public String getCompanyName()
    {
        return companyName;
    }

    public void setCompanyName(String companyName)
    {
        this.companyName = companyName;
    }

    public String getCreationDate()
    {
        return creationDate;
    }

    public void setCreationDate(String creationDate)
    {
        this.creationDate = creationDate;
    }

    public String getSampleIdentity()
    {
        return sampleIdentity;
    }

    public void setSampleIdentity(String sampleIdentity)
    {
        this.sampleIdentity = sampleIdentity;
    }
}
