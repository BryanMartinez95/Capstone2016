package environmentalDataLogging.models;

/**
 * The type Sample export model.
 */
public class SampleExportModel
{
    private String sampleLabId;
    private String sampleCreationDate;
    private String sampleComment;

    private String reportId;

    private String testMethodName;
    private double measurementValue;
    private String unitName;
    private double temperature;
    private String measurementDate;

    /**
     * Instantiates a new Sample export model.
     */
    public SampleExportModel()
    {
    }

    /**
     * Gets sample lab id.
     *
     * @return the sample lab id
     */
    public String getSampleLabId()
    {
        return sampleLabId;
    }

    /**
     * Sets sample lab id.
     *
     * @param sampleLabId the sample lab id
     */
    public void setSampleLabId(String sampleLabId)
    {
        this.sampleLabId = sampleLabId;
    }

    /**
     * Gets sample creation date.
     *
     * @return the sample creation date
     */
    public String getSampleCreationDate()
    {
        return sampleCreationDate;
    }

    /**
     * Sets sample creation date.
     *
     * @param sampleCreationDate the sample creation date
     */
    public void setSampleCreationDate(String sampleCreationDate)
    {
        this.sampleCreationDate = sampleCreationDate;
    }

    /**
     * Gets sample comment.
     *
     * @return the sample comment
     */
    public String getSampleComment()
    {
        return sampleComment;
    }

    /**
     * Sets sample comment.
     *
     * @param sampleComment the sample comment
     */
    public void setSampleComment(String sampleComment)
    {
        this.sampleComment = sampleComment;
    }

    /**
     * Gets report id.
     *
     * @return the report id
     */
    public String getReportId()
    {
        return reportId;
    }

    /**
     * Sets report id.
     *
     * @param reportId the report id
     */
    public void setReportId(String reportId)
    {
        this.reportId = reportId;
    }

    /**
     * Gets test method name.
     *
     * @return the test method name
     */
    public String getTestMethodName()
    {
        return testMethodName;
    }

    /**
     * Sets test method name.
     *
     * @param testMethodName the test method name
     */
    public void setTestMethodName(String testMethodName)
    {
        this.testMethodName = testMethodName;
    }

    /**
     * Gets measurement value.
     *
     * @return the measurement value
     */
    public double getMeasurementValue()
    {
        return measurementValue;
    }

    /**
     * Sets measurement value.
     *
     * @param measurementValue the measurement value
     */
    public void setMeasurementValue(double measurementValue)
    {
        this.measurementValue = measurementValue;
    }

    /**
     * Gets unit name.
     *
     * @return the unit name
     */
    public String getUnitName()
    {
        return unitName;
    }

    /**
     * Sets unit name.
     *
     * @param unitName the unit name
     */
    public void setUnitName(String unitName)
    {
        this.unitName = unitName;
    }

    /**
     * Gets temperature.
     *
     * @return the temperature
     */
    public double getTemperature()
    {
        return temperature;
    }

    /**
     * Sets temperature.
     *
     * @param temperature the temperature
     */
    public void setTemperature(double temperature)
    {
        this.temperature = temperature;
    }

    /**
     * Gets measurement date.
     *
     * @return the measurement date
     */
    public String getMeasurementDate()
    {
        return measurementDate;
    }

    /**
     * Sets measurement date.
     *
     * @param measurementDate the measurement date
     */
    public void setMeasurementDate(String measurementDate)
    {
        this.measurementDate = measurementDate;
    }
}
