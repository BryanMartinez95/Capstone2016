package environmentalDataLogging.models;

import environmentalDataLogging.models.FilterModel;
import environmentalDataLogging.models.SortModel;

import java.util.List;

public class GridResultModel<TModel>
{
    private int pageSize;
    private int currentPage;
    private int totalItems;
    private boolean isAcending;
    private List<FilterModel> filters;
    private String sortcolumn;
    private List<TModel> data;

    public GridResultModel()
    {
    }

    public GridResultModel(int pageSize, int currentPage, int totalItems, boolean isAcending, List<FilterModel> filters, String sortcolumn, List<TModel> data)
    {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.totalItems = totalItems;
        this.isAcending = isAcending;
        this.filters = filters;
        this.sortcolumn = sortcolumn;
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

    public int getTotalItems()
    {
        return totalItems;
    }

    public void setTotalItems(int totalItems)
    {
        this.totalItems = totalItems;
    }

    public List<FilterModel> getFilters()
    {
        return filters;
    }

    public void setFilters(List<FilterModel> filters)
    {
        this.filters = filters;
    }

    public String getSortcolumn()
    {
        return sortcolumn;
    }

    public void setSortcolumn(String sortcolumn)
    {
        this.sortcolumn = sortcolumn;
    }

    public List<TModel> getData()
    {
        return data;
    }

    public void setData(List<TModel> data)
    {
        this.data = data;
    }

    public boolean isAcending()
    {
        return isAcending;
    }

    public void setAcending(boolean acending)
    {
        isAcending = acending;
    }
}
