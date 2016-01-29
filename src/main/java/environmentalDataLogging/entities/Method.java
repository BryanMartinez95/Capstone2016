package environmentalDataLogging.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Set;
import java.util.UUID;

/**
 * Created by 631152 on 1/22/2016.
 */
@Entity
public class Method
{
    @Id
    @org.hibernate.annotations.Type(type="org.hibernate.type.UUIDCharType")
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     * The value of the unit of measure
     */
    @NotNull
    private String name;

    public Method()
    {

    }
    public Method(String name)
    {
        this.name = name;
    }
}
