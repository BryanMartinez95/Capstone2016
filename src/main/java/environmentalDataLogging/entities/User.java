package environmentalDataLogging.entities;

import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Comparator;
import java.util.function.Predicate;

/**
 * The user entity class is the link to the user table in the EnviroDB database.
 * A user contains all the information about the a person who works for the Environmental
 * Technologies lab
 */
@Entity
public class User extends BaseEntity
{
    /**
     * The first name of the user
     */
    protected String firstName;

    /**
     * The last name of the user
     */
    protected String lastName;

    /**
     * The email of the user
     */
    @Column(unique = true, nullable = false)
    protected String email;


    /**
     * The status of the user that can either be active or inactive
     */
    @NotNull
    @Enumerated(EnumType.STRING)
    protected Status status;

    /**
     * The password of the user
     */
    @NotNull
    protected String password;

    @NotNull
    @Enumerated(EnumType.STRING)
    protected RoleType roleType;

    public User(String firstName, String lastName, String email, Status status, String password, RoleType roleType)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.password = password;
        this.roleType = roleType;
    }

    public User(String firstName, String lastName, String email, String password, Status status, RoleType roleType)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.status = status;
        this.roleType = roleType;
    }

    public User()
    {

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

    public String getPassword()
    {
        return password;
    }

    public void setPassword(String password)
    {
        this.password = password;
    }

    public RoleType getRoleType()
    {
        return roleType;
    }

    public void setRoleType(RoleType roleType)
    {
        this.roleType = roleType;
    }

    @Override
    public String toString()
    {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", status=" + status +
                ", password='" + password + '\'' +
                ", roleType=" + roleType +
                '}';
    }

    public static Comparator<User> firstNameComparator = (o1, o2) -> o1.getFirstName().compareToIgnoreCase(o2.getFirstName());
    public static Comparator<User> lastNameComparator = (o1, o2) -> o1.getLastName().compareToIgnoreCase(o2.getLastName());
    public static Comparator<User> emailComparator = (o1, o2) -> o1.getEmail().compareToIgnoreCase(o2.getEmail());
    public static Comparator<User> dateCreatedComparator = (o1, o2) -> o1.getDateAdded().compareTo(o2.getDateAdded());

    public static Predicate<User> filterByFirstName(String value){ return p -> p.getFirstName().contains(value); }
    public static Predicate<User> filterByLastName(String value)
    {
        return p -> p.getLastName().contains(value);
    }
    public static Predicate<User> filterByemail(String value)
    {
        return p -> p.getEmail().contains(value);
    }
}
