package environmentalDataLogging.models;

import java.util.List;

public class GridRequestModel
{
    private int pageSize;
    private int currentPage;
    private List<FilterModel> filters;
    private String sortColumn;
    private boolean isAscending;

    public GridRequestModel()
    {
    }

    public GridRequestModel(int pageSize, int currentPage, List<FilterModel> filters, String sortColumn, boolean isAscending)
    {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.filters = filters;
        this.sortColumn = sortColumn;
        this.isAscending = isAscending;
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

    public String getSortColumn()
    {
        return sortColumn;
    }

    public void setSortColumn(String sortColumn)
    {
        this.sortColumn = sortColumn;
    }

    public boolean isAscending()
    {
        return isAscending;
    }

    public void setAscending(boolean ascending)
    {
        isAscending = ascending;
    }
}
