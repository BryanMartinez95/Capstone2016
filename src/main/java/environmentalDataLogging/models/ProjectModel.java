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

/**
 * The ProjectModel class is a copy to the Project entity.
 * A Project contains all the information relating to a project off the Environmental Technologies lab
 */
public class ProjectModel
{

    /**
     *
     */
    private UUID id;

    /**
     *
     */
    private ProjectId projectId;

    /**
     *
     */
    private String name;

    /**
     *
     */
    private Date startDate;

    /**
     *
     */
    private Date endDate;

    /**
     *
     */
    private Set<Client> clients;

    /**
     *
     */
    private Status status;

    /**
     *
     */
    private Set<Sample> samples;

    /**
     *
     */
    private Set<User> users;

    /**
     *
     */
    private String comment;

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
     * Gets project id.
     *
     * @return the project id
     */
    public ProjectId getProjectId()
    {
        return projectId;
    }

    /**
     * Sets project id.
     *
     * @param projectId the project id
     */
    public void setProjectId(ProjectId projectId)
    {
        this.projectId = projectId;
    }

    /**
     * Gets name.
     *
     * @return the name
     */
    public String getName()
    {
        return name;
    }

    /**
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name)
    {
        this.name = name;
    }

    /**
     * Gets start date.
     *
     * @return the start date
     */
    public Date getStartDate()
    {
        return startDate;
    }

    /**
     * Sets start date.
     *
     * @param startDate the start date
     */
    public void setStartDate(Date startDate)
    {
        this.startDate = startDate;
    }

    /**
     * Gets end date.
     *
     * @return the end date
     */
    public Date getEndDate()
    {
        return endDate;
    }

    /**
     * Sets end date.
     *
     * @param endDate the end date
     */
    public void setEndDate(Date endDate)
    {
        this.endDate = endDate;
    }

    /**
     * Gets clients.
     *
     * @return the clients
     */
    public Set<Client> getClients()
    {
        return clients;
    }

    /**
     * Sets clients.
     *
     * @param clients the clients
     */
    public void setClients(Set<Client> clients)
    {
        this.clients = clients;
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
     * Gets samples.
     *
     * @return the samples
     */
    public Set<Sample> getSamples()
    {
        return samples;
    }

    /**
     * Sets samples.
     *
     * @param samples the samples
     */
    public void setSamples(Set<Sample> samples)
    {
        this.samples = samples;
    }

    /**
     * Gets users.
     *
     * @return the users
     */
    public Set<User> getUsers()
    {
        return users;
    }

    /**
     * Sets users.
     *
     * @param users the users
     */
    public void setUsers(Set<User> users)
    {
        this.users = users;
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
}
