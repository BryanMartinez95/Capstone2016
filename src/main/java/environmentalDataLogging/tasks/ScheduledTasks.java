package environmentalDataLogging.tasks;

import environmentalDataLogging.services.interfaces.IImportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.File;
import java.text.SimpleDateFormat;

/**
 * This class is used by the server side to schedule tasks which run at a certain time
 */
@Component
public class ScheduledTasks
{
    @Autowired
    IImportService importService;
    @Autowired
    DirectoryWatcher directoryWatcher;

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    /**
     * the interval of time specified will indicate how often this method will run and will check for new data files
     */
    @Scheduled(fixedRate = 2000)
    public void checkForNewFiles()
    {
        directoryWatcher.setService(importService);
        System.out.println("check");
        Thread directoryWatcherThread = new Thread(directoryWatcher);
        directoryWatcherThread.run();
    }

}
