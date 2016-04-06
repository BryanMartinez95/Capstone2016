package environmentalDataLogging.models;

import environmentalDataLogging.enums.FilterType;

/**
 * The type Filter model.
 */
public class FilterModel
{
    private String column;
    private String value;
    private String name;
    private FilterType type;

    /**
     * Instantiates a new Filter model.
     */
    public FilterModel()
    {
    }

    /**
     * Instantiates a new Filter model.
     *
     * @param column the column
     * @param value  the value
     * @param name   the name
     * @param type   the type
     */
    public FilterModel(String column, String value, String name, FilterType type)
    {
        this.column = column;
        this.value = value;
        this.name = name;
        this.type = type;
    }

    /**
     * Gets column.
     *
     * @return the column
     */
    public String getColumn()
    {
        return column;
    }

    /**
     * Sets column.
     *
     * @param column the column
     */
    public void setColumn(String column)
    {
        this.column = column;
    }

    /**
     * Gets value.
     *
     * @return the value
     */
    public String getValue()
    {
        return value;
    }

    /**
     * Sets value.
     *
     * @param value the value
     */
    public void setValue(String value)
    {
        this.value = value;
    }

    /**
     * Gets name.
     *
     * @return the name
     */
    public String getName()
    {
        return name;
    }

    /**
     * Sets name.
     *
     * @param name the name
     */
    public void setName(String name)
    {
        this.name = name;
    }

    /**
     * Gets type.
     *
     * @return the type
     */
    public FilterType getType()
    {
        return type;
    }

    /**
     * Sets type.
     *
     * @param type the type
     */
    public void setType(FilterType type)
    {
        this.type = type;
    }
}