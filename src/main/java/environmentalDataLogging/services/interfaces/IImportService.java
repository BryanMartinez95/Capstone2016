package environmentalDataLogging.services.interfaces;

import environmentalDataLogging.entities.Sample;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;

public interface IImportService
{
    boolean save(List<Sample> samples);
    boolean deviceController(Path filepath ) throws IOException;

}
