package environmentalDataLogging.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Inheritance(strategy=InheritanceType.TABLE_PER_CLASS)
public abstract class BaseEntity
{
	/**
	 *The unique auto generated id for a client
	 */
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
}
