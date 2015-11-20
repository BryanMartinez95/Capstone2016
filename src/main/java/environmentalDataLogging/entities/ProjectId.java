package environmentalDataLogging.entities;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
public class ProjectId
{
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;
    private String value1;
    private String value2;
    private String value3;

//    @OneToOne(fetch= FetchType.LAZY, mappedBy="projectId")
//    @JoinColumn(name="id")
//    private Project project;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public String getValue1()
    {
        return value1;
    }

    public void setValue1(String value1)
    {
        this.value1 = value1;
    }

    public String getValue2()
    {
        return value2;
    }

    public void setValue2(String value2)
    {
        this.value2 = value2;
    }

    public String getValue3()
    {
        return value3;
    }

    public void setValue3(String value3)
    {
        this.value3 = value3;
    }
}
