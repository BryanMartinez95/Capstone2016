package environmentalDataLogging.models;

import environmentalDataLogging.enums.FilterType;

public class FilterModel
{
    private String column;
    private String value;
    private String name;
    private FilterType type;

    public FilterModel()
    {
    }

    public FilterModel(String column, String value, String name, FilterType type)
    {
        this.column = column;
        this.value = value;
        this.name = name;
        this.type = type;
    }

    public String getColumn()
    {
        return column;
    }

    public void setColumn(String column)
    {
        this.column = column;
    }

    public String getValue()
    {
        return value;
    }

    public void setValue(String value)
    {
        this.value = value;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public FilterType getType()
    {
        return type;
    }

    public void setType(FilterType type)
    {
        this.type = type;
    }
}