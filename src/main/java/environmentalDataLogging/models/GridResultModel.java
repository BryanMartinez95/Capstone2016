package environmentalDataLogging.models;

import environmentalDataLogging.enums.SortType;
import environmentalDataLogging.enums.Status;

import java.util.List;

/**
 * The type Grid result model.
 *
 * @param <TModel> the type parameter
 */
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

    /**
     * Instantiates a new Grid result model.
     */
    public GridResultModel()
    {
    }

    /**
     * Instantiates a new Grid result model.
     *
     * @param pageSize       the page size
     * @param currentPage    the current page
     * @param sortColumn     the sort column
     * @param sortType       the sort type
     * @param totalItems     the total items
     * @param filters        the filters
     * @param data           the data
     * @param ignoredColumns the ignored columns
     * @param gridStatus     the grid status
     */
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

    /**
     * Gets page size.
     *
     * @return the page size
     */
    public int getPageSize()
    {
        return pageSize;
    }

    /**
     * Sets page size.
     *
     * @param pageSize the page size
     */
    public void setPageSize(int pageSize)
    {
        this.pageSize = pageSize;
    }

    /**
     * Gets current page.
     *
     * @return the current page
     */
    public int getCurrentPage()
    {
        return currentPage;
    }

    /**
     * Sets current page.
     *
     * @param currentPage the current page
     */
    public void setCurrentPage(int currentPage)
    {
        this.currentPage = currentPage;
    }

    /**
     * Gets sort column.
     *
     * @return the sort column
     */
    public String getSortColumn()
    {
        return sortColumn;
    }

    /**
     * Sets sort column.
     *
     * @param sortColumn the sort column
     */
    public void setSortColumn(String sortColumn)
    {
        this.sortColumn = sortColumn;
    }

    /**
     * Gets sort type.
     *
     * @return the sort type
     */
    public SortType getSortType()
    {
        return sortType;
    }

    /**
     * Sets sort type.
     *
     * @param sortType the sort type
     */
    public void setSortType(SortType sortType)
    {
        this.sortType = sortType;
    }

    /**
     * Gets total items.
     *
     * @return the total items
     */
    public int getTotalItems()
    {
        return totalItems;
    }

    /**
     * Sets total items.
     *
     * @param totalItems the total items
     */
    public void setTotalItems(int totalItems)
    {
        this.totalItems = totalItems;
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

    /**
     * Gets data.
     *
     * @return the data
     */
    public List<TModel> getData()
    {
        return data;
    }

    /**
     * Sets data.
     *
     * @param data the data
     */
    public void setData(List<TModel> data)
    {
        this.data = data;
    }

    /**
     * Gets ignored columns.
     *
     * @return the ignored columns
     */
    public List<String> getIgnoredColumns()
    {
        return ignoredColumns;
    }

    /**
     * Sets ignored columns.
     *
     * @param ignoredColumns the ignored columns
     */
    public void setIgnoredColumns(List<String> ignoredColumns)
    {
        this.ignoredColumns = ignoredColumns;
    }

    /**
     * Gets grid status.
     *
     * @return the grid status
     */
    public Status getGridStatus()
    {
        return gridStatus;
    }

    /**
     * Sets grid status.
     *
     * @param gridStatus the grid status
     */
    public void setGridStatus(Status gridStatus)
    {
        this.gridStatus = gridStatus;
    }
}