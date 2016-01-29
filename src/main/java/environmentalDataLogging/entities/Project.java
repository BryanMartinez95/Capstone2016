package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;
import org.hibernate.annotations.GenericGenerator;

import javax.annotation.Nullable;
import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.Set;
import java.util.UUID;

/**
 * The Project entity class is the link to the project table in the EnviroDB database.
 * A Project contains all the information relating to a project off the Environmental Technologies lab
 */
@Entity
public class Project
{
    /**
     *The unique auto generated id for a project
     */
    @Id
    @org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     * The Environmental technologies generated 4 digit project id for the project
     */
    private String projectId;


    /**
     * The name of the project
     */
    @NotNull
    private String name;

    /**
     * The date the project was created
     */
    @NotNull
    private Date startDate;

    /**
     * The date the project was completed
     */
    private Date endDate;

    /**
     * A list of clients the project has
     */
    @ManyToMany
    private Set<Client> clients;

    /**
     *The status of the project specifying whether the project is active or inactive
     */
    @NotNull
    private Status status;

    /**
     * The list of samples the project has
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "project")
    private Set<Sample> samples;

    /**
     *The investigator that is in charge of delivering the project
     */
    @ManyToOne(cascade = CascadeType.ALL)
    private Investigator investigator;

    /**
     * A list of users who have contributed to the project
     */
    @ManyToMany
    private Set<User> users;

    /**
     * A comment/description of the project
     */
    private String comment;

    public Project()
    {

    }
    public Project(String projectId, String name, Date startDate,Status status)
    {
        this.projectId = projectId;
        this.name = name;
        this.startDate = startDate;
        this.status= status;
    }
    public Project(String projectId, String name, Date startDate, Set<Client> clients, Status status, Set<Sample> samples, Investigator investigator, Set<User> users, String comment)
    {
        this.projectId = projectId;
        this.name = name;
        this.startDate = startDate;
        this.clients = clients;
        this.status = status;
        this.samples = samples;
        this.investigator = investigator;
        this.users = users;
        this.comment = comment;
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

    /**
     * Gets investigator.
     *
     * @return the investigator
     */
    public Investigator getInvestigator() {
        return investigator;
    }

    /**
     * Sets investigator.
     *
     * @param investigator the investigator
     */
    public void setInvestigator(Investigator investigator) {
        this.investigator = investigator;
    }
}
