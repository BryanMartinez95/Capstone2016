package environmentalDataLogging.services.implementations;

import environmentalDataLogging.entities.*;
import environmentalDataLogging.models.*;
import environmentalDataLogging.models.views.ProjectModel;
import environmentalDataLogging.reports.ReportBuilder;
import environmentalDataLogging.repositories.IInvestigatorRepository;
import environmentalDataLogging.repositories.IProjectRepository;
import environmentalDataLogging.services.interfaces.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Project service provides all of the required methods for the project controller
 * to communicate with the database.  The object extends BaseService which has
 * all of the repositories injected, giving the service access.
 */
@Service
public class ProjectService extends CrudService<Project, ProjectModel> implements IProjectService
{
    /**
     * The Repository.
     */
    @Autowired
    IProjectRepository repository;

    /**
     * The Investigator repository.
     */
    @Autowired
    IInvestigatorRepository investigatorRepository;

    @Override
    public byte[] report(UUID id)
    {
        Project project = repository.findOne(id);
        ReportBuilder reportBuilder = new ReportBuilder();
        return reportBuilder.build(project);
        // return null;
    }

    @Override
    public void update(ProjectModel model)
    {
        Project entity = modelMapper.map(model, entityClass);

        Investigator investigator = investigatorRepository.findOne(model.getInvestigatorId());
        entity.setInvestigator(investigator);

        beforeUpdate(entity);
        repository.saveAndFlush(entity);
    }

    @Override
    public void delete(UUID id)
    {
        Project project = repository.findOne(id);
        project.setInvestigator(null);
        repository.saveAndFlush(project);
        repository.delete(id);
    }

    public List<SelectListModel> getProjectList()
    {
        List<Project> projects = repository.findAll();
        List<SelectListModel> models = new ArrayList<>();

        for (Project project : projects)
        {
            models.add(new SelectListModel(project.getName(), project.getId()));
        }

        return models;
    }

    public UUID createAndReturnUUID(ProjectModel model)
    {
        Project entity = modelMapper.map(model, entityClass);

        Investigator investigator = investigatorRepository.findOne(model.getInvestigatorId());
        entity.setInvestigator(investigator);

        beforeAdd(entity);
        entity = repository.saveAndFlush(entity);
        return entity.getId();
    }

    public List<ProjectExportModel> export(UUID id)
    {
        Format formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        List<ProjectExportModel> models = new ArrayList<>();


        Project project = repository.findOne(id);

        for (Sample sample : project.getSamples())
        {
            for (Measurement measurement : sample.getMeasurements())
            {
                ProjectExportModel model = new ProjectExportModel();

                // Project values
                model.setProjectId(project.getProjectId());
                model.setProjectName(project.getName());
                if (project.getStartDate() != null)
                {
                    model.setProjectStartDate(formatter.format(project.getStartDate()));
                }
                if (project.getEndDate() != null)
                {
                    model.setProjectEndDate(formatter.format(project.getEndDate()));
                }

                // Sample Values
                model.setSampleLabId(sample.getLabId());
                if (sample.getDate() != null)
                {
                    model.setSampleCreationDate(formatter.format(sample.getDate()));
                }
                model.setSampleComment(sample.getComment());

                if (sample.getSampleIdentifier() != null)
                {
                    model.setReportId(sample.getSampleIdentifier().getCompanyName() +
                            sample.getSampleIdentifier().getCreationDate() +
                            sample.getSampleIdentifier().getSampleIdentity());
                }

                // Measurement Values
                model.setMeasurementValue(measurement.getValue());
                model.setTemperature(measurement.getTemperature());
                if (measurement.getDate() != null)
                {
                    model.setMeasurementDate(formatter.format(measurement.getDate()));
                }
                if (measurement.getTestMethod() != null)
                {
                    model.setTestMethodName(measurement.getTestMethod().getName());
                }
                if (measurement.getUnit() != null)
                {
                    model.setUnitName(measurement.getUnit().getName());
                }

                models.add(model);
            }
        }

        return models;
    }
}
