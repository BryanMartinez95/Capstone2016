package environmentalDataLogging.tasks;

import environmentalDataLogging.services.interfaces.IImportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.File;
import java.text.SimpleDateFormat;

@Component
public class ScheduledTasks
{
    @Autowired
    IImportService importService;
    @Autowired
    DirectoryWatcher directoryWatcher;

    private static final SimpleDateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");

    @Scheduled(fixedRate = 30000)
    public void checkForNewFiles()
    {
        System.out.println("check");
        directoryWatcher.setService(importService);
        directoryWatcher.loadNewFiles();

    }

}
