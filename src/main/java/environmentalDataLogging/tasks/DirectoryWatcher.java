package environmentalDataLogging.tasks;


import environmentalDataLogging.services.interfaces.IImportService;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

/**
 * This class checks directories for new files, calls the import service if there is a new file and archives them on success
 */
@Service
public class DirectoryWatcher implements Runnable {
    /**
     * The Import service.
     */
    IImportService importService;

    /**
     * The Directory stream.
     */
    DirectoryStream<Path> directoryStream;
    /**
     * These are the three folders in which the files are directed to
     */
    File archivedFolder = new File("C:/Developer/watchMeCapstone/Archived");
    /**
     * The Error folder.
     */
    File errorFolder = new File("C:/Developer/watchMeCapstone/Error");
    /**
     * The New directory.
     */
    File newDirectory = new File("C:/Developer/watchMeCapstone/New");

    /**
     * Load new files into the system
     *
     * @return the boolean
     */
    public boolean loadNewFiles()
    {
        try
        {
            directoryStream = Files.newDirectoryStream(newDirectory.toPath());
            if(!fileExists())
            {
                directoryStream.close();
                return true;
            }
            List<Path> files =listFiles();
            write(files);
            directoryStream.close();
            return true;
        } catch (IOException e)
        {
            e.printStackTrace();
            return false;
        }


    }

    /**
     * Write boolean.
     *
     * @param files the files
     * @return the boolean
     * @throws IOException the io exception
     */
    public boolean write(List<Path> files) throws IOException
    {



        for(Path path:files)
        {
            System.out.println(path.toString());
            boolean success = importService.deviceController(path);
            if(success)
            {
                int archiveNumber = folderSize("archive") + 1;
                Files.move(path, archivedFolder.toPath().resolve(path.getFileName().resolveSibling(archiveNumber + "_" + path
                                .getFileName().toString())),
                        StandardCopyOption
                                .REPLACE_EXISTING);
            }
            else{
                int errorNumber = folderSize("error") +  1;
                Files.move(path, errorFolder.toPath().resolve(path.getFileName().resolveSibling(errorNumber + "_" + path
                                .getFileName().toString())),
                        StandardCopyOption
                                .REPLACE_EXISTING);
            }
        }

        return true;
    }

    /**
     * checks the size of the archive folder to assign a unique number
     * @param folder
     * @return
     */
    private int folderSize(String folder)
    {
        DirectoryStream<Path> stream = null;
        int i =0;
        try{
        if(folder.equalsIgnoreCase("archive"))
        {
             stream = Files.newDirectoryStream(archivedFolder.toPath());
        }else if(folder.equalsIgnoreCase("error"))
        {
             stream = Files.newDirectoryStream(errorFolder.toPath());
        }

        for (Path entry: stream) {
         i++;
        }
        stream.close();
        } catch (DirectoryIteratorException| IOException ex) {
            return 0;
        }
        return i;
    }

    /**
     * List files list.
     *
     * @return the list
     * @throws IOException the io exception
     */
    public List<Path> listFiles() throws IOException {
        List<Path> result = new ArrayList<>();
        try (
            DirectoryStream<Path> stream = Files.newDirectoryStream(newDirectory.toPath()))
        {

            for (Path entry: stream) {
                result.add(entry);
            }
            stream.close();
        } catch (DirectoryIteratorException ex) {

            throw ex.getCause();
        }

        return result;
    }

    /**
     * checks whether or not the folder contains anything
     *
     * @return the boolean
     * @throws IOException the io exception
     */
    public boolean fileExists()throws IOException
    {
            if(directoryStream.iterator().hasNext() == true)
            {
                return true;
            }else{
                System.out.println("new folder empty");
                return false;
            }


    }


    /**
     * Sets service.
     *
     * @param importService the import service
     */
    public void setService(IImportService importService)
    {
        this.importService = importService;
    }

    /**
     * When an object implementing interface <code>Runnable</code> is used
     * to create a thread, starting the thread causes the object's
     * <code>run</code> method to be called in that separately executing
     * thread.
     * <p>
     * The general contract of the method <code>run</code> is that it may
     * take any action whatsoever.
     *
     * @see Thread#run()
     */
    @Override
    public void run()
    {
        loadNewFiles();
    }
}