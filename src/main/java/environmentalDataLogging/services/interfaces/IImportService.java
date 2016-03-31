package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Sample;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

/**
 * The interface Import service.
 */
public interface IImportService
{
    /**
     * This method is used to save samples to the database
     *
     * @param samples the samples
     * @return the boolean
     */
    boolean save(List<Sample> samples);

    /**
     * This method devices based on device name, which device it is reading in
     *
     * @param filepath the filepath
     * @return the boolean
     * @throws IOException the io exception
     */
    boolean deviceController(Path filepath ) throws IOException;

}
