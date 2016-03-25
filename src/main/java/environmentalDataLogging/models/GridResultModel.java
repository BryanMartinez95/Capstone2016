package environmentalDataLogging.models;

import environmentalDataLogging.enums.SortType;
import environmentalDataLogging.enums.Status;

import java.util.List;

public class GridResultModel<TModel>
{
    private int pageSize;
    private int currentPage;
    private String sortColumn;
    private SortType sortType;
    private int totalItems;
    private List<FilterModel> filters;
    private List<TModel> data;
    private List<String> ignoredColumns;
    private Status gridStatus;

    public GridResultModel()
    {
    }

    public GridResultModel(int pageSize, int currentPage, String sortColumn, SortType sortType, int totalItems, List<FilterModel> filters, List<TModel> data, List<String> ignoredColumns, Status gridStatus)
    {
        this.pageSize = pageSize;
        this.currentPage = currentPage;
        this.sortColumn = sortColumn;
        this.sortType = sortType;
        this.totalItems = totalItems;
        this.filters = filters;
        this.data = data;
        this.ignoredColumns = ignoredColumns;
        this.gridStatus = gridStatus;
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

    public String getSortColumn()
    {
        return sortColumn;
    }

    public void setSortColumn(String sortColumn)
    {
        this.sortColumn = sortColumn;
    }

    public SortType getSortType()
    {
        return sortType;
    }

    public void setSortType(SortType sortType)
    {
        this.sortType = sortType;
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

    public List<TModel> getData()
    {
        return data;
    }

    public void setData(List<TModel> data)
    {
        this.data = data;
    }

    public List<String> getIgnoredColumns()
    {
        return ignoredColumns;
    }

    public void setIgnoredColumns(List<String> ignoredColumns)
    {
        this.ignoredColumns = ignoredColumns;
    }

    public Status getGridStatus()
    {
        return gridStatus;
    }

    public void setGridStatus(Status gridStatus)
    {
        this.gridStatus = gridStatus;
    }
}