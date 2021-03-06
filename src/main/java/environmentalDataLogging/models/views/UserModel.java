package environmentalDataLogging.models.views;

import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;

import java.util.UUID;

/**
 * The UserModel class is a copy to the user entity.
 * A user contains all the information about the a person who works for the Environmental
 * Technologies lab
 */
public class UserModel
{
    /**
     * The unique auto generated id for a user
     */
    private UUID id;

    /**
     * The first name of the user
     */
    private String firstName;

    /**
     * The last name of the user
     */
    private String lastName;

    /**
     * The email of the user
     */
    private String email;

    private String password;


    /**
     * The status of the user that can either be active or inactive
     */
    private Status status;

    /**
     * The account enum type specifying the user's access level
     */
    private RoleType roleType;

    public UserModel()
    {
    }

    public UserModel(UUID id, String firstName, String lastName, String email, String password, Status status, RoleType roleType)
    {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.status = status;
        this.roleType = roleType;
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
     * Sets id.
     *
     * @param id the id
     */
    public void setId(UUID id)
    {
        this.id = id;
    }

    /**
     * Gets first name.
     *
     * @return the first name
     */
    public String getFirstName()
    {
        return firstName;
    }

    /**
     * Sets first name.
     *
     * @param firstName the first name
     */
    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    /**
     * Gets last name.
     *
     * @return the last name
     */
    public String getLastName()
    {
        return lastName;
    }

    /**
     * Sets last name.
     *
     * @param lastName the last name
     */
    public void setLastName(String lastName)
    {
        this.lastName = lastName;
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
     * Gets account type.
     *
     * @return the account type
     */
    public RoleType getRoleType()
    {
        return roleType;
    }

    /**
     * Sets account type.
     *
     * @param roleType the account type
     */
    public void setRoleType(RoleType roleType)
    {
        this.roleType = roleType;
    }

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }
}
