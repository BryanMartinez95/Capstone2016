package environmentalDataLogging.models.views;

import environmentalDataLogging.enums.Status;

import java.util.UUID;

/**
 * The InvestigatorModel class is a copy to the Investigator entity.
 * A Investigator is the middle man between the Environmental technologies lab and the client.
 */
public class InvestigatorModel {

    /**
     *The unique auto generated id for a investigator
     */
    private UUID id;

    /**
     *The name of the investigator
     */
    private String name;

    /**
     *The investigators phone number
     */
    private String phoneNumber;

    /**
     *The investigators email
     */
    private String email;

    /**
     *The status of the investigator is either active or inactive
     */
    private Status status;

    /**
     *A comment/description about the investigator
     */
    private String comment;

    public InvestigatorModel()
    {
    }

    //    /**
//     * The list of projects that the investigator has
//     */
//    private Set<Project> projects;

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

//    /**
//     * Gets projects.
//     *
//     * @return the projects
//     */
//    public Set<Project> getProjects()
//	{
//        return projects;
//    }
//
//    /**
//     * Sets projects.
//     *
//     * @param projects the projects
//     */
//    public void setProjects(Set<Project> projects)
//	{
//        this.projects = projects;
//    }
}
