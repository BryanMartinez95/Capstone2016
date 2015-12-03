package environmentalDataLogging.entities;

import java.util.UUID;
import javax.persistence.*;

import org.hibernate.annotations.GenericGenerator;

/**
 * The type Project id.
 */
@Entity
@Table(name = "project_id")
public class ProjectId
{
    /**
     *
     */
    @Id
    @GenericGenerator(name = "uuid-gen", strategy = "uuid2")
    @GeneratedValue(generator = "uuid-gen")
    private UUID id;

    /**
     *
     */
    private String value1;

    /**
     *
     */
    private String value2;

    /**
     *
     */
    private String value3;


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

    /**
     * Gets value 1.
     *
     * @return the value 1
     */
    public String getValue1()
    {
        return value1;
    }

    /**
     * Sets value 1.
     *
     * @param value1 the value 1
     */
    public void setValue1(String value1)
    {
        this.value1 = value1;
    }

    /**
     * Gets value 2.
     *
     * @return the value 2
     */
    public String getValue2()
    {
        return value2;
    }

    /**
     * Sets value 2.
     *
     * @param value2 the value 2
     */
    public void setValue2(String value2)
    {
        this.value2 = value2;
    }

    /**
     * Gets value 3.
     *
     * @return the value 3
     */
    public String getValue3()
    {
        return value3;
    }

    /**
     * Sets value 3.
     *
     * @param value3 the value 3
     */
    public void setValue3(String value3)
    {
        this.value3 = value3;
    }


}
