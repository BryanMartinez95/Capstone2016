package environmentalDataLogging.models;

import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;

import java.util.List;

public class GridResultModel<TModel>
{
    private int pageSize;
    private int currentPage;
    private int totalItems;
    private List<String> ignoredColumns;
    private List<FilterModel> filters;
    private List<SortModel> sorts;
    private List<TModel> data;

    public GridResultModel()
    {
    }

    public GridResultModel(int pageSize, int currentPage, int totalItems, List<String> ignoredColumns, List<FilterModel> filters, List<SortModel> sorts, List<TModel> data)
    {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.totalItems = totalItems;
        this.ignoredColumns = ignoredColumns;
        this.filters = filters;
        this.sorts = sorts;
        this.data = data;
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

    public List<TModel> getList()
    {
        return data;
    }

    public void setList(List<TModel> data)
    {
        this.data = data;
    }

    public int getTotalItems()
    {
        return totalItems;
    }

    public void setTotalItems(int totalItems)
    {
        this.totalItems = totalItems;
    }

    public List<String> getIgnoredColumns()
    {
        return ignoredColumns;
    }

    public void setIgnoredColumns(List<String> ignoredColumns)
    {
        this.ignoredColumns = ignoredColumns;
    }

    public List<TModel> getData()
    {
        return data;
    }

    public void setData(List<TModel> data)
    {
        this.data = data;
    }
}
