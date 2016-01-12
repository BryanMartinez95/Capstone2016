package environmentalDataLogging.entities;


import environmentalDataLogging.enums.RoleType;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.UUID;

@Entity
public class Role implements Serializable
{
	@Id
	@GenericGenerator(name = "uuid-gen", strategy = "uuid2")
	@GeneratedValue(generator = "uuid-gen")
	private UUID id;

	private RoleType roleType;

	public Role()
	{
	}

	public Role(RoleType roleType)
	{
		this.roleType = roleType;
	}

	public UUID getId()
	{
		return id;
	}

	public void setId(UUID id)
	{
		this.id = id;
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
