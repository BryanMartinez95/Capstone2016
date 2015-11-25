package environmentalDataLogging.tasks;

import org.springframework.scheduling.config.Task;

/**
 * The type File listener task.
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
