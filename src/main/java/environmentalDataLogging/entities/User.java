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

    /**
     * The Role type.
     */
    @NotNull
    @Enumerated(EnumType.STRING)
    protected RoleType roleType;

    /**
     * Instantiates a new User.
     *
     * @param firstName the first name
     * @param lastName  the last name
     * @param email     the email
     * @param status    the status
     * @param password  the password
     * @param roleType  the role type
     */
    public User(String firstName, String lastName, String email, Status status, String password, RoleType roleType)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.status = status;
        this.password = password;
        this.roleType = roleType;
    }

    /**
     * Instantiates a new User.
     *
     * @param firstName the first name
     * @param lastName  the last name
     * @param email     the email
     * @param password  the password
     * @param status    the status
     * @param roleType  the role type
     */
    public User(String firstName, String lastName, String email, String password, Status status, RoleType roleType)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.status = status;
        this.roleType = roleType;
    }

    /**
     * Instantiates a new User.
     */
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

    /**
     * Gets password.
     *
     * @return the password
     */
    public String getPassword()
    {
        return password;
    }

    /**
     * Sets password.
     *
     * @param password the password
     */
    public void setPassword(String password)
    {
        this.password = password;
    }

    /**
     * Gets role type.
     *
     * @return the role type
     */
    public RoleType getRoleType()
    {
        return roleType;
    }

    /**
     * Sets role type.
     *
     * @param roleType the role type
     */
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

    /**
     * The First name comparator.
     */
    public static Comparator<User> firstNameComparator = (o1, o2) -> o1.getFirstName().compareToIgnoreCase(o2.getFirstName());

    /**
     * The Last name comparator.
     */
    public static Comparator<User> lastNameComparator = (o1, o2) -> o1.getLastName().compareToIgnoreCase(o2.getLastName());

    /**
     * The Email comparator.
     */
    public static Comparator<User> emailComparator = (o1, o2) -> o1.getEmail().compareToIgnoreCase(o2.getEmail());

    /**
     * Filter by first name predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<User> filterByFirstName(String value){ return p -> p.getFirstName().toLowerCase().contains(value.toLowerCase()); }

    /**
     * Filter by last name predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<User> filterByLastName(String value)
    {
        return p -> p.getLastName().toLowerCase().contains(value.toLowerCase());
    }

    /**
     * Filter by email predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<User> filterByemail(String value)
    {
        return p -> p.getEmail().toLowerCase().contains(value.toLowerCase());
    }

    /**
     * Filter by status predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<User> filterByStatus(Status value) { return p -> p.getStatus().equals(value);}

    /**
     * Filter by role type predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<User> filterByRoleType(RoleType value) { return p -> p.getRoleType().equals(value);}
}
