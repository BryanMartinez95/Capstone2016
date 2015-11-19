package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import org.hibernate.annotations.GenericGenerator;

@Entity
public class Sample
{
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    @ManyToOne
    private Device device;

    @ManyToOne
    private Set<Measurement> measurements;
    private Date date;
    private Status status;
//    private String comment;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public Device getDevice()
    {
        return device;
    }

    public void setDevice(Device device)
    {
        this.device = device;
    }

    public Set<Measurement> getMeasurements()
    {
        return measurements;
    }

    public void setMeasurements(Set<Measurement> measurements)
    {
        this.measurements = measurements;
    }

    public Date getDate()
    {
        return date;
    }

    public void setDate(Date date)
    {
        this.date = date;
    }

    public Status getStatus()
    {
        return status;
    }

    public void setStatus(Status status)
    {
        this.status = status;
    }

//    public String getComment()
//    {
//        return comment;
//    }
//
//    public void setComment(String comment)
//    {
//        this.comment = comment;
//    }
}
