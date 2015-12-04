package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import java.util.Set;
import java.util.UUID;
import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

/**
 * The Client entity class is the link to the client table in the EnviroDB database.
 * A Client is a person who sponsors the Environmental Technologies projects.
 */
@Entity
public class Client
{
    /**
     *The unique auto generated id for a client
     */
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     * The name of the client
     */
    private String name;

    /**
     * The representative for the client that is working directly with the project.
     */
    private String contact;

    /**
     * The phone number of the client
     */
    private String phoneNumber;

    /**
     * The email of the client
     */
    private String email;

    /**
     *The status of the client that can either be active or inactive
     */
    private Status status;

    /**
     *An optional comment/description of the client
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
     * Gets contact.
     *
     * @return the contact
     */
    public String getContact()
    {
        return contact;
    }

    /**
     * Sets contact.
     *
     * @param contact the contact
     */
    public void setContact(String contact)
    {
        this.contact = contact;
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


}
