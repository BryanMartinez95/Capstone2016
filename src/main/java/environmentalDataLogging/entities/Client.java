package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.persistence.Entity;
import javax.validation.constraints.NotNull;
import java.util.Comparator;
import java.util.function.Predicate;

/**
 * The Client entity class is the link to the client table in the EnviroDB database.
 * A Client is a person who sponsors the Environmental Technologies projects.
 */
@Entity
public class Client extends BaseEntity
{
    /**
     * The name of the client
     */
    @NotNull
    private String name;

    /**
     * The phone number of the client
     */
    private String phoneNumber;

    /**
     * The email of the client
     */
    private String email;

    /**
     * The status of the client that can either be active or inactive
     */
    @NotNull
    private Status status;

    private String address;

    /**
     * An optional comment/description of the client
     */
    private String comment;

    /**
     * Instantiates a new Client.
     */
    public Client()
    {

    }

    /**
     * Constructor with bare necessities
     *
     * @param name   the name
     * @param status the status
     */
    public Client(String name, Status status)
    {
        this.name = name;
        this.status = status;
    }

    /**
     * Full constructor
     *
     * @param name        the name
     * @param phoneNumber the phone number
     * @param email       the email
     * @param status      the status
     * @param address     the address
     * @param comment     the comment
     */
    public Client(String name, String phoneNumber, String email, Status status, String address, String comment)
    {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.status = status;
        this.address = address;
        this.comment = comment;
    }

    /**
     * Gets address.
     *
     * @return the address
     */
    public String getAddress()
    {
        return address;
    }

    /**
     * Sets address.
     *
     * @param address the address
     */
    public void setAddress(String address)
    {
        this.address = address;
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

    /**
     * The Name comparator.
     */
    public static Comparator<Client> nameComparator = (o1, o2) -> o1.getName().compareToIgnoreCase(o2.getName());
    /**
     * The Phone number comparator.
     */
    public static Comparator<Client> phoneNumberComparator = (o1, o2) -> o1.getPhoneNumber().compareToIgnoreCase(o2.getPhoneNumber());
    /**
     * The Email comparator.
     */
    public static Comparator<Client> emailComparator = (o1, o2) -> o1.getEmail().compareToIgnoreCase(o2.getEmail());
    /**
     * The Address comparator.
     */
    public static Comparator<Client> addressComparator = (o1, o2) -> o1.getAddress().compareToIgnoreCase(o2.getAddress());

    /**
     * Filter by name predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<Client> filterByName(String value) { return p -> p.getName().contains(value); }


    /**
     * Filter by phone number predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<Client> filterByPhoneNumber(String value) { return p -> p.getPhoneNumber().contains(value); }

    /**
     * Filter by email predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<Client> filterByEmail(String value) { return p -> p.getEmail().contains(value); }

    /**
     * Filter by address predicate.
     *
     * @param value the value
     * @return the predicate
     */
    public static Predicate<Client> filterByAddress(String value) { return p -> p.getAddress().contains(value); }
}
