package environmentalDataLogging.entities;

import java.util.Date;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import org.hibernate.annotations.GenericGenerator;

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class BaseEntity
{
    @Id
    @org.hibernate.annotations.Type(type = "org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    protected UUID id;
    private boolean isDeleted;

    private Date dateAdded;
    
    private Date dateEdtided;
    
    private Date dateDeleted;
    
    private UUID addedBy;
    
    private UUID editedBy;
    
    private UUID deletedBy;

    public boolean isDeleted()
    {
        return isDeleted;
    }

    public void setDeleted(boolean deleted)
    {
        isDeleted = deleted;
    }

    public Date getDateAdded()
    {
        return dateAdded;
    }

    public void setDateAdded(Date dateAdded)
    {
        this.dateAdded = dateAdded;
    }

    public Date getDateEdtided()
    {
        return dateEdtided;
    }

    public void setDateEdtided(Date dateEdtided)
    {
        this.dateEdtided = dateEdtided;
    }

    public Date getDateDeleted()
    {
        return dateDeleted;
    }

    public void setDateDeleted(Date dateDeleted)
    {
        this.dateDeleted = dateDeleted;
    }

    public UUID getAddedBy()
    {
        return addedBy;
    }

    public void setAddedBy(UUID addedBy)
    {
        this.addedBy = addedBy;
    }

    public UUID getEditedBy()
    {
        return editedBy;
    }

    public void setEditedBy(UUID editedBy)
    {
        this.editedBy = editedBy;
    }

    public UUID getDeletedBy()
    {
        return deletedBy;
    }

    public void setDeletedBy(UUID deletedBy)
    {
        this.deletedBy = deletedBy;
    }

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }
}
