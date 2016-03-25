package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import java.util.Comparator;
import java.util.Set;

/**
 * The Investigator entity class is the link to the investigator table in the EnviroDB database.
 * A Investigator is the middle man between the Environmental technologies lab and the client.
 */
@Entity
public class Investigator extends BaseEntity
{
    /**
     * The name of the investigator
     */
    @NotNull
    private String name;

    /**
     * The investigator's phone number
     */
    private String phoneNumber;

    /**
     * The investigator's email
     */
    private String email;

    /**
     * The status of the investigator is either active or inactive
     */
    @NotNull
    private Status status;

    /**
     * A comment/description about the investigator
     */
    private String comment;

    public Investigator()
    {

    }

    public Investigator(String name, Status status)
    {
        this.name = name;
        this.status = status;
    }

    public Investigator(String name, String phoneNumber, String email, Status status, String comment)
    {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.status = status;
        this.comment = comment;
    }


    /**
     * The list of projects that the investigator has
     */
    @OneToMany(mappedBy = "investigator")
    private Set<Project> projects;

    /**
     * Gets projects.
     *
     * @return the projects
     */
    public Set<Project> getProjects()
    {
        return projects;
    }

    /**
     * Sets projects.
     *
     * @param projects the projects
     */
    public void setProjects(Set<Project> projects)
    {
        this.projects = projects;
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
     * Gets phone number.
     *
     * @return the phone number
     */
    public String getPhoneNumber()
    {
        return phoneNumber;
    }

    /**
     * Sets phone number.
     *
     * @param phoneNumber the phone number
     */
    public void setPhoneNumber(String phoneNumber)
    {
        this.phoneNumber = phoneNumber;
    }

    /**
     * Gets email.
     *
     * @return the email
     */
    public String getEmail()
    {
        return email;
    }

    /**
     * Sets email.
     *
     * @param email the email
     */
    public void setEmail(String email)
    {
        this.email = email;
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

    public static Comparator<Investigator> nameComparator = (o1, o2) -> o1.getName().compareTo(o2.getName());
    public static Comparator<Investigator> phoneNumberComparator = (o1, o2) -> o1.getPhoneNumber().compareTo(o2.getPhoneNumber());
    public static Comparator<Investigator> emailComparator = (o1, o2) -> o1.getEmail().compareTo(o2.getEmail());
}
