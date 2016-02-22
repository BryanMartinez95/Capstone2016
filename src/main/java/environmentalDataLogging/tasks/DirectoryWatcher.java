package environmentalDataLogging.tasks;


import environmentalDataLogging.services.interfaces.IImportService;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Service
public class DirectoryWatcher {
    IImportService importService;

    DirectoryStream<Path> directoryStream;
    File archivedFolder = new File("C:/Developer/watchMeCapstone/Archived");
    File errorFolder = new File("C:/Developer/watchMeCapstone/Error");
    File newDirectory = new File("C:/Developer/watchMeCapstone/New");

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
    public boolean write(List<Path> files) throws IOException
    {

        int archiveNumber = archiveSize()+1;
        for(Path path:files)
        {
            System.out.println(path.toString());
            importService.deviceController(path);
            Files.move(path,archivedFolder.toPath().resolve(path.getFileName().resolveSibling(archiveNumber+"_"+path
                    .getFileName().toString())),
                    StandardCopyOption
                    .REPLACE_EXISTING);
        }

        return true;
    }

    private int archiveSize()
    {
        int i =0;
            try (
                    DirectoryStream<Path> stream = Files.newDirectoryStream(archivedFolder.toPath()))
            {

                for (Path entry: stream) {
                 i++;
                }
                stream.close();
            } catch (DirectoryIteratorException| IOException ex) {
                return 0;
            }
        return i;
    }

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
            // I/O error encounted during the iteration, the cause is an IOException
            throw ex.getCause();
        }

        return result;
    }
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


    public void setService(IImportService importService)
    {
        this.importService = importService;
    }
}