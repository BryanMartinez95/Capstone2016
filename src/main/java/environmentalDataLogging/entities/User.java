package environmentalDataLogging.entities;

import environmentalDataLogging.enums.RoleType;
import environmentalDataLogging.enums.Status;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.NotNull;

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
	private String firstName;

	/**
	 * The last name of the user
	 */
	private String lastName;

	/**
	 * The email of the user
	 */
	@Column(unique = true, nullable = false)
	private String email;


	/**
	 * The status of the user that can either be active or inactive
	 */
	@NotNull
	@Enumerated(EnumType.STRING)
	private Status status;

	/**
	 * The password of the user
	 */
	@NotNull
	private String password;

	@NotNull
	@Enumerated(EnumType.STRING)
	private RoleType roleType;

	public User(String firstName, String lastName, String email, Status status, String password, RoleType roleType)
	{
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.status = status;
		this.password = password;
		this.roleType = roleType;
	}
	public User(String firstName, String lastName, String email, String password, Status status, RoleType
			roleType)
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
}
