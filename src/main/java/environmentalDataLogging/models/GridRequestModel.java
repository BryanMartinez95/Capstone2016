package environmentalDataLogging.models;

import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;

import java.util.List;


public class GridRequestModel
{
    private int pageSize;
    private int currentPage;
    private List<String> ignoredColumns;
    private List<FilterModel> filters;
    private List<SortModel> sorts;

    public GridRequestModel()
    {
    }

    public GridRequestModel(int pageSize, int currentPage, List<FilterModel> filters, List<SortModel> sorts)
    {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.filters = filters;
        this.sorts = sorts;
    }

    public int getPageSize()
    {
        return pageSize;
    }

    public void setPageSize(int pageSize)
    {
        this.pageSize = pageSize;
    }

    public int getCurrentPage()
    {
        return currentPage;
    }

    public void setCurrentPage(int currentPage)
    {
        this.currentPage = currentPage;
    }

	public List<String> getIgnoredColumns()
	{
		return ignoredColumns;
	}

	public void setIgnoredColumns(List<String> ignoredColumns)
	{
		this.ignoredColumns = ignoredColumns;
	}

    public List<FilterModel> getFilters()
    {
        return filters;
    }

    public void setFilters(List<FilterModel> filters)
    {
        this.filters = filters;
    }

    public List<SortModel> getSorts()
    {
        return sorts;
    }

    public void setSorts(List<SortModel> sorts)
    {
        this.sorts = sorts;
    }
}
