package environmentalDataLogging.models;

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

    public SampleExportModel()
    {
    }

    public String getSampleLabId()
    {
        return sampleLabId;
    }

    public void setSampleLabId(String sampleLabId)
    {
        this.sampleLabId = sampleLabId;
    }

    public String getSampleCreationDate()
    {
        return sampleCreationDate;
    }

    public void setSampleCreationDate(String sampleCreationDate)
    {
        this.sampleCreationDate = sampleCreationDate;
    }

    public String getSampleComment()
    {
        return sampleComment;
    }

    public void setSampleComment(String sampleComment)
    {
        this.sampleComment = sampleComment;
    }

    public String getReportId()
    {
        return reportId;
    }

    public void setReportId(String reportId)
    {
        this.reportId = reportId;
    }

    public String getTestMethodName()
    {
        return testMethodName;
    }

    public void setTestMethodName(String testMethodName)
    {
        this.testMethodName = testMethodName;
    }

    public double getMeasurementValue()
    {
        return measurementValue;
    }

    public void setMeasurementValue(double measurementValue)
    {
        this.measurementValue = measurementValue;
    }

    public String getUnitName()
    {
        return unitName;
    }

    public void setUnitName(String unitName)
    {
        this.unitName = unitName;
    }

    public double getTemperature()
    {
        return temperature;
    }

    public void setTemperature(double temperature)
    {
        this.temperature = temperature;
    }

    public String getMeasurementDate()
    {
        return measurementDate;
    }

    public void setMeasurementDate(String measurementDate)
    {
        this.measurementDate = measurementDate;
    }
}
