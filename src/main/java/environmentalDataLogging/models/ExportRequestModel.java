package environmentalDataLogging.models;

import java.util.List;

/**
 * Created by 186303 on 4/6/2016.
 */
public class ExportRequestModel
{
    private List<FilterModel> filters;

    public ExportRequestModel(List<FilterModel> filters)
    {
        this.filters = filters;
    }

    public ExportRequestModel()
    {
    }

    public List<FilterModel> getFilters()
    {
        return filters;
    }

    public void setFilters(List<FilterModel> filters)
    {
        this.filters = filters;
    }
}
