package environmentalDataLogging.models;

/**
 * The type Project export model.
 */
public class ProjectExportModel
{
    private String projectId;
    private String projectName;
    private String projectStartDate;
    private String projectEndDate;

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
     * Instantiates a new Project export model.
     */
    public ProjectExportModel()
    {
    }

    /**
     * Gets project id.
     *
     * @return the project id
     */
    public String getProjectId()
    {
        return projectId;
    }

    /**
     * Sets project id.
     *
     * @param projectId the project id
     */
    public void setProjectId(String projectId)
    {
        this.projectId = projectId;
    }

    /**
     * Gets project name.
     *
     * @return the project name
     */
    public String getProjectName()
    {
        return projectName;
    }

    /**
     * Sets project name.
     *
     * @param projectName the project name
     */
    public void setProjectName(String projectName)
    {
        this.projectName = projectName;
    }

    /**
     * Gets project start date.
     *
     * @return the project start date
     */
    public String getProjectStartDate()
    {
        return projectStartDate;
    }

    /**
     * Sets project start date.
     *
     * @param projectStartDate the project start date
     */
    public void setProjectStartDate(String projectStartDate)
    {
        this.projectStartDate = projectStartDate;
    }

    /**
     * Gets project end date.
     *
     * @return the project end date
     */
    public String getProjectEndDate()
    {
        return projectEndDate;
    }

    /**
     * Sets project end date.
     *
     * @param projectEndDate the project end date
     */
    public void setProjectEndDate(String projectEndDate)
    {
        this.projectEndDate = projectEndDate;
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