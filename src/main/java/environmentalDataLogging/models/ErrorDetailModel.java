package environmentalDataLogging.models;


/**
 * The type Error detail model.
 */
public class ErrorDetailModel
{
    private String title;
    private int status;
    private String detail;
    private long timeStamp;
    private String developerMessage;

    /**
     * Instantiates a new Error detail model.
     */
    public ErrorDetailModel()
    {
    }

    /**
     * Instantiates a new Error detail model.
     *
     * @param title            the title
     * @param status           the status
     * @param detail           the detail
     * @param timeStamp        the time stamp
     * @param developerMessage the developer message
     */
    public ErrorDetailModel(String title, int status, String detail, long timeStamp, String developerMessage)
    {
        this.title = title;
        this.status = status;
        this.detail = detail;
        this.timeStamp = timeStamp;
        this.developerMessage = developerMessage;
    }

    /**
     * Gets title.
     *
     * @return the title
     */
    public String getTitle()
    {
        return title;
    }

    /**
     * Sets title.
     *
     * @param title the title
     */
    public void setTitle(String title)
    {
        this.title = title;
    }

    /**
     * Gets status.
     *
     * @return the status
     */
    public int getStatus()
    {
        return status;
    }

    /**
     * Sets status.
     *
     * @param status the status
     */
    public void setStatus(int status)
    {
        this.status = status;
    }

    /**
     * Gets detail.
     *
     * @return the detail
     */
    public String getDetail()
    {
        return detail;
    }

    /**
     * Sets detail.
     *
     * @param detail the detail
     */
    public void setDetail(String detail)
    {
        this.detail = detail;
    }

    /**
     * Gets time stamp.
     *
     * @return the time stamp
     */
    public long getTimeStamp()
    {
        return timeStamp;
    }

    /**
     * Sets time stamp.
     *
     * @param timeStamp the time stamp
     */
    public void setTimeStamp(long timeStamp)
    {
        this.timeStamp = timeStamp;
    }

    /**
     * Gets developer message.
     *
     * @return the developer message
     */
    public String getDeveloperMessage()
    {
        return developerMessage;
    }

    /**
     * Sets developer message.
     *
     * @param developerMessage the developer message
     */
    public void setDeveloperMessage(String developerMessage)
    {
        this.developerMessage = developerMessage;
    }
}
