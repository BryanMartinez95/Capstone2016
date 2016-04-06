package environmentalDataLogging.models;

/**
 * The type Select list model.
 */
public class SelectListModel
{
    private String display;
    private Object value;

    /**
     * Instantiates a new Select list model.
     */
    public SelectListModel()
    {
    }

    /**
     * Instantiates a new Select list model.
     *
     * @param display the display
     * @param value   the value
     */
    public SelectListModel(String display, Object value)
    {
        this.display = display;
        this.value = value;
    }

    /**
     * Gets display.
     *
     * @return the display
     */
    public String getDisplay()
    {
        return display;
    }

    /**
     * Sets display.
     *
     * @param display the display
     */
    public void setDisplay(String display)
    {
        this.display = display;
    }

    /**
     * Gets value.
     *
     * @return the value
     */
    public Object getValue()
    {
        return value;
    }

    /**
     * Sets value.
     *
     * @param value the value
     */
    public void setValue(Object value)
    {
        this.value = value;
    }
}
