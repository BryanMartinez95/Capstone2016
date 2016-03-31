package environmentalDataLogging.entities;

import java.time.LocalDate;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import org.hibernate.annotations.GenericGenerator;

/**
 * The BaseEntity class is extended by all other entities and contains all common attributes that all tables/entites must have
 */
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public abstract class BaseEntity
{
    /**
     * The unique uuid for all entities
     */
    @Id
    @org.hibernate.annotations.Type(type = "org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    protected UUID id;
    private boolean isDeleted;

    /**
     * The date of when the entity was created
     */
    private LocalDate dateAdded;

    /**
     * the date of when the entity has been edited
     */
    private LocalDate dateEdited;

    /**
     * the date when the entity has been pseudo deleted as no entity is ever deleted in the system
     */
    private LocalDate dateDeleted;

    /**
     * the user who creates the entity
     */
    private UUID addedBy;

    /**
     * the user who edits the entity
     */
    private UUID editedBy;

    /**
     * the use who pseudo deletes the entity
     */
    private UUID deletedBy;


    /**
     * Is deleted boolean.
     *
     * @return the boolean
     */
    public boolean isDeleted()
    {
        return isDeleted;
    }

    /**
     * Sets deleted.
     *
     * @param deleted the deleted
     */
    public void setDeleted(boolean deleted)
    {
        isDeleted = deleted;
    }

    /**
     * Gets date added.
     *
     * @return the date added
     */
    public LocalDate getDateAdded()
    {
        return dateAdded;
    }

    /**
     * Sets date added.
     *
     * @param dateAdded the date added
     */
    public void setDateAdded(LocalDate dateAdded)
    {
        this.dateAdded = dateAdded;
    }

    /**
     * Gets date edited.
     *
     * @return the date edited
     */
    public LocalDate getDateEdited()
    {
        return dateEdited;
    }

    /**
     * Sets date edited.
     *
     * @param dateEdited the date edited
     */
    public void setDateEdited(LocalDate dateEdited)
    {
        this.dateEdited = dateEdited;
    }

    /**
     * Gets date deleted.
     *
     * @return the date deleted
     */
    public LocalDate getDateDeleted()
    {
        return dateDeleted;
    }

    /**
     * Sets date deleted.
     *
     * @param dateDeleted the date deleted
     */
    public void setDateDeleted(LocalDate dateDeleted)
    {
        this.dateDeleted = dateDeleted;
    }

    /**
     * Gets added by.
     *
     * @return the added by
     */
    public UUID getAddedBy()
    {
        return addedBy;
    }

    /**
     * Sets added by.
     *
     * @param addedBy the added by
     */
    public void setAddedBy(UUID addedBy)
    {
        this.addedBy = addedBy;
    }

    /**
     * Gets edited by.
     *
     * @return the edited by
     */
    public UUID getEditedBy()
    {
        return editedBy;
    }

    /**
     * Sets edited by.
     *
     * @param editedBy the edited by
     */
    public void setEditedBy(UUID editedBy)
    {
        this.editedBy = editedBy;
    }

    /**
     * Gets deleted by.
     *
     * @return the deleted by
     */
    public UUID getDeletedBy()
    {
        return deletedBy;
    }

    /**
     * Sets deleted by.
     *
     * @param deletedBy the deleted by
     */
    public void setDeletedBy(UUID deletedBy)
    {
        this.deletedBy = deletedBy;
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
}
