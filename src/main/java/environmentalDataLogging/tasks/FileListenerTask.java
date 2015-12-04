package environmentalDataLogging.tasks;

import org.springframework.scheduling.config.Task;

/**
 * The File listener task.
 * Listens for a CSV to parse and store the data to the database.
 */
public class FileListenerTask extends Task
{
    /**
     * Create a new {@code Task}.
     *
     * @param runnable the underlying task to execute.
     */
    public FileListenerTask(Runnable runnable)
    {
        super(runnable);
    }
}
