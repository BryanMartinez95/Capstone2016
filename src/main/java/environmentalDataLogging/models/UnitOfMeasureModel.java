package environmentalDataLogging.models;

import environmentalDataLogging.entities.Alias;
import java.util.Set;
import java.util.UUID;
import javax.persistence.ManyToMany;

public class UnitOfMeasureModel
{
    private UUID id;

    private Set<Alias> aliases;
    private String type;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public Set<Alias> getAliases()
    {
        return aliases;
    }

    public void setAliases(Set<Alias> aliases)
    {
        this.aliases = aliases;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }
}
