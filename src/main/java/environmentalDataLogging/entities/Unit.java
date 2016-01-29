package environmentalDataLogging.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import java.util.UUID;

/**
 * The Unit entity class is the link to the unit_of_measure table in the EnviroDB database.
 * A Unit represents a list of hardcoded unit of measure within the measurement.
 */
@Entity
public class Unit
{
	@Id
	@org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
	@GenericGenerator(name = "uuid-gen", strategy = "uuid2")
	@GeneratedValue(generator = "uuid-gen")
	protected UUID id;

	public UUID getId()
	{
		return id;
	}

	public void setId(UUID id)
	{
		this.id = id;
	}
	/**
	 * The value of the unit of measure
	 */
	@NotNull
	private String name;

	public Unit(String name)
	{
		this.name = name;
	}

	public Unit()
	{
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}
}
