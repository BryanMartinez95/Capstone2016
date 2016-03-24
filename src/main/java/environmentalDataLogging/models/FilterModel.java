package environmentalDataLogging.models;

import environmentalDataLogging.enums.FilterType;

public class FilterModel
{
    private String column;
    private String value;
    private FilterType type;

    public FilterModel(String column, String value, FilterType type)
    {
        this.column = column;
        this.value = value;
        this.type = type;
    }

    public FilterModel()
    {
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

    public FilterType getType()
    {
        return type;
    }

    public void setType(FilterType type)
    {
        this.type = type;
    }
}
