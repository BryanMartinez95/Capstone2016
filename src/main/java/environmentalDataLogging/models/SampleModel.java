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

public class SampleModel
{
    private UUID id;

//    @ManyToOne
//    private Device device;


    private Set<Measurement> measurements;

    private Date date;
    private Status status;
    private String comment;



    private Device device;

    private Project project;

    public UUID getId()
    {
        return id;
    }

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

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }

    public Device getDevice() {
        return device;
    }

    public void setDevice(Device device) {
        this.device = device;
    }
}
