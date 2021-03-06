package environmentalDataLogging.entities;

import environmentalDataLogging.enums.Status;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Comparator;
import java.util.Date;

/**
 * The Measurement entity class is the link to the measurement table in the EnviroDB database.
 * A Measurement contains all the information relating to the measurement of a sample.
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

    /**
     * The temperature of the measurement
     */
    private double temperature;

    /**
     * The type of substance the measurement is
     */
    @OneToOne(fetch = FetchType.EAGER)
    private TestMethod testMethod;

    /**
     * The unit in which the measurement is measured in
     */
    @OneToOne(fetch = FetchType.EAGER)
    private Unit unit;

    @NotNull
    @Column(name="date", nullable = false)
    private Date date;

    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    /**
     * Instantiates a new Measurement.
     */
    public Measurement()
    {

    }

    /**
     * Instantiates a new Measurement.
     *
     * @param value      the value
     * @param testMethod the test method
     * @param unit       the unit
     * @param status     the status
     * @param date       the date
     */
    public Measurement(double value, TestMethod testMethod, Unit unit,Status status,Date date)
    {
        this.value = value;
        this.testMethod = testMethod;
        this.unit = unit;
        this.status = status;
        this.date= date;
    }

    /**
     * Instantiates a new Measurement.
     *
     * @param value      the value
     * @param testMethod the test method
     * @param sample     the sample
     * @param date       the date
     * @param status     the status
     */
    public Measurement(double value, TestMethod testMethod,Sample sample,Date date,Status status)
    {
        this.value = value;
        this.testMethod = testMethod;
        this.sample = sample;
        this.date = date;
        this.status = status;
    }

    /**
     * Instantiates a new Measurement.
     *
     * @param value      the value
     * @param testMethod the test method
     * @param sample     the sample
     * @param date       the date
     * @param unit       the unit
     * @param status     the status
     */
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

    /**
     * Gets date.
     *
     * @return the date
     */
    public Date getDate() {
        return date;
    }

    /**
     * Sets date.
     *
     * @param date the date
     */
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

    /**
     * The Date created comparator.
     */
    public static Comparator<Measurement> dateCreatedComparator = (o1, o2) -> o1.getDateAdded().compareTo(o2.getDateAdded());
}
