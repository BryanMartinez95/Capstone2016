package environmentalDataLogging.models;

public class SelectListModel
{
    private String display;
    private Object value;

    public SelectListModel()
    {
    }

    public SelectListModel(String display, Object value)
    {
        this.display = display;
        this.value = value;
    }

    public String getDisplay()
    {
        return display;
    }

    public void setDisplay(String display)
    {
        this.display = display;
    }

    public Object getValue()
    {
        return value;
    }

    public void setValue(Object value)
    {
        this.value = value;
    }
}
