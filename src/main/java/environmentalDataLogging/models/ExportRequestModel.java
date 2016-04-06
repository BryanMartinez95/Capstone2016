package environmentalDataLogging.models;

import java.util.List;

/**
 * Created by 186303 on 4/6/2016.
 */
public class ExportRequestModel
{
    private List<FilterModel> filters;

    /**
     * Instantiates a new Export request model.
     *
     * @param filters the filters
     */
    public ExportRequestModel(List<FilterModel> filters)
    {
        this.filters = filters;
    }

    /**
     * Instantiates a new Export request model.
     */
    public ExportRequestModel()
    {
    }

    /**
     * Gets filters.
     *
     * @return the filters
     */
    public List<FilterModel> getFilters()
    {
        return filters;
    }

    /**
     * Sets filters.
     *
     * @param filters the filters
     */
    public void setFilters(List<FilterModel> filters)
    {
        this.filters = filters;
    }
}
