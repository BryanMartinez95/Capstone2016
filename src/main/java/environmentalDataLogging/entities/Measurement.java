package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * The Measurement entity class is the link to the measurement table in the EnviroDB database.
 *  A Measurement contains all the information relating to the measurement of a sample.
 *
 */
@Entity
@Table(uniqueConstraints={@UniqueConstraint(columnNames={"test_method_id","date","value"})})
public class Measurement extends BaseEntity
{
    /**
     * The numerical value of the measurement
     */
    @NotNull
    private double value;

    /**
     * The sample in which the measurement belongs to
     */
    @ManyToOne(fetch = FetchType.EAGER)
    @NotNull
    private Sample sample;

    private double temperature;

    /**
     * The type of substance the measurement is
     */
    @OneToOne
    private TestMethod testMethod;

    /**
     * The unit in which the measurement is measured in
     */
    @OneToOne
    private Unit unit;

    @NotNull
    @Column(name="date", nullable = false)
    private Date date;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    public Measurement()
    {

    }

    public Measurement(double value, TestMethod testMethod, Unit unit,Status status)
    {
        this.value = value;
        this.testMethod = testMethod;
        this.unit = unit;
        this.status = status;

    }
    public Measurement(double value, TestMethod testMethod,Sample sample,Date date,Status status)
    {
        this.value = value;
        this.testMethod = testMethod;
        this.sample = sample;
        this.date = date;
        this.status = status;
    }
    public Measurement(double value, TestMethod testMethod,Sample sample,Date date,Unit unit,Status status)
    {
        this.value = value;
        this.testMethod = testMethod;
        this.sample = sample;
        this.date = date;
        this.unit= unit;
        this.status = status;
    }

    /**
     * Gets value.
     *
     * @return the value
     */
    public double getValue()
    {
        return value;
    }

    /**
     * Sets value.
     *
     * @param value the value
     */
    public void setValue(double value)
    {
        this.value = value;
    }

    /**
     * Gets substance.
     *
     * @return the substance
     */


    /**
     * Gets unit of measure.
     *
     * @return the unit of measure
     */
    public Unit getUnit()
    {
        return unit;
    }

    /**
     * Sets unit of measure.
     *
     * @param unit the unit of measure
     */
    public void setUnit(Unit unit)
    {
        this.unit = unit;
    }

    /**
     * Gets sample.
     *
     * @return the sample
     */
    public Sample getSample() {
        return sample;
    }

    /**
     * Sets sample.
     *
     * @param sample the sample
     */
    public void setSample(Sample sample) {
        this.sample = sample;
    }

    @Override
    public String toString() {
        return "Measurement{" +
                "value=" + value +
                ", sample=" + sample +
                ", temperature=" + temperature +
                ", testMethod=" + testMethod +
                ", unit=" + unit +
                ", date=" + date +
                '}';
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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
	 * Gets testMethod.
	 *
	 * @return the testMethod
	 */
    public TestMethod getTestMethod() {
        return testMethod;
    }

	/**
	 * Sets testMethod.
	 *
	 * @param testMethod the testMethod
	 */
    public void setTestMethod(TestMethod testMethod) {
        this.testMethod = testMethod;
    }

    /**
     * Gets status.
     *
     * @return the status
     */
    public Status getStatus() {
        return status;
    }

    /**
     * Sets status.
     *
     * @param status the status
     */
    public void setStatus(Status status) {
        this.status = status;
    }
}
