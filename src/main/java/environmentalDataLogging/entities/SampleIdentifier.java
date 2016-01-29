package environmentalDataLogging.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

/**
 * The SampleId entity class is the link to the sample_id table in the EnviroDB database.
 * A SampleId three values that uniquely create a project ID when combined together
 * Format XXX1111Y222 - XXX
 */
@Entity
public class SampleIdentifier {
    /**
     *The unique auto generated id for a ProjectId
     */
    @Id
    @org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;


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
}
