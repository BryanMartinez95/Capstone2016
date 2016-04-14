package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Comparator;
import java.util.Date;
import java.util.Set;
import java.util.function.Predicate;

/**
 * The Project entity class is the link to the project table in the EnviroDB database.
 * A Project contains all the information relating to a project off the Environmental Technologies lab
 */
@Entity
public class Project extends BaseEntity
{
    /**
     * The Environmental technologies generated 4 digit project id for the project
     */
    @Column(name = "project_id")
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
     * The status of the project specifying whether the project is active or inactive
     */
    @NotNull
    private Status status;

    /**
     * The list of samples the project has
     */
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "project",fetch = FetchType.EAGER)
    private Set<Sample> samples;

    /**
     * The investigator that is in charge of delivering the project
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

    /**
     * Instantiates a new Project.
     */
    public Project()
    {

    }

    /**
     * Instantiates a new Project.
     *
     * @param projectId the project id
     * @param name      the name
     * @param startDate the start date
     * @param status    the status
     */
    public Project(String projectId, String name, Date startDate, Status status)
    {
        this.projectId = projectId;
        this.name = name;
        this.startDate = startDate;
        this.status = status;
    }

    /**
     * Instantiates a new Project.
     *
     * @param projectId    the project id
     * @param name         the name
     * @param startDate    the start date
     * @param clients      the clients
     * @param status       the status
     * @param samples      the samples
     * @param investigator the investigator
     * @param users        the users
     * @param comment      the comment
     */
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
     * Gets projectId.
     *
     * @return the projectId
     */
    public String getProjectId()
    {
        return projectId;
    }

    /**
     * Sets projectId.
     *
     * @param projectId the projectId
     */
    public void setProjectId(String projectId)
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

    /**
     * Gets investigator.
     *
     * @return the investigator
     */
    public Investigator getInvestigator()
    {
        return investigator;
    }

    /**
     * Sets investigator.
     *
     * @param investigator the investigator
     */
    public void setInvestigator(Investigator investigator)
    {
        this.investigator = investigator;
    }

    /**
     * The Name comparator.
     */
    public static Comparator<Project> nameComparator = (o1, o2) -> o1.getName().compareTo(o2.getName());

    public static Predicate<Project> projectIdPredicate(String value)
    {
        return p -> p.getProjectId() != null && p.getProjectId().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Project> namePredicate(String value)
    {
        return p -> p.getName() != null && p.getName().toLowerCase().contains(value.toLowerCase());
    }

    public static Predicate<Project> statusPredicate(String value) { return p -> p.getStatus().equals(Status.valueOf(value.toUpperCase()));}
}
