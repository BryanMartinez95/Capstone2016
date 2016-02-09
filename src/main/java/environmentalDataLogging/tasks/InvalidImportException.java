package environmentalDataLogging.tasks;

/**
 * Created by bmart on 03-Feb-2016.
 */
public class InvalidImportException extends Exception {
    public InvalidImportException(String msg)
    {
        super(msg);
    }
}
