package environmentalDataLogging.models;

import environmentalDataLogging.entities.Client;
import environmentalDataLogging.entities.ProjectId;
import environmentalDataLogging.entities.Sample;
import environmentalDataLogging.entities.User;
import environmentalDataLogging.enums.Status;
import java.util.Date;
import java.util.Set;
import java.util.UUID;
import javax.persistence.CascadeType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

public class ProjectModel
{
    private UUID id;

    private ProjectId projectId;
    private String name;
    private Date startDate;
    private Date endDate;
    private Set<Client> clients;
    private Status status;
    private Set<Sample> samples;
    private Set<User> users;
    private String comment;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public ProjectId getProjectId()
    {
        return projectId;
    }

    public void setProjectId(ProjectId projectId)
    {
        this.projectId = projectId;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public Date getStartDate()
    {
        return startDate;
    }

    public void setStartDate(Date startDate)
    {
        this.startDate = startDate;
    }

    public Date getEndDate()
    {
        return endDate;
    }

    public void setEndDate(Date endDate)
    {
        this.endDate = endDate;
    }

    public Set<Client> getClients()
    {
        return clients;
    }

    public void setClients(Set<Client> clients)
    {
        this.clients = clients;
    }

    public Status getStatus()
    {
        return status;
    }

    public void setStatus(Status status)
    {
        this.status = status;
    }

    public Set<Sample> getSamples()
    {
        return samples;
    }

    public void setSamples(Set<Sample> samples)
    {
        this.samples = samples;
    }

    public Set<User> getUsers()
    {
        return users;
    }

    public void setUsers(Set<User> users)
    {
        this.users = users;
    }

    public String getComment()
    {
        return comment;
    }

    public void setComment(String comment)
    {
        this.comment = comment;
    }
}
