package environmentalDataLogging.models;

import environmentalDataLogging.enums.SortType;

public class SortModel
{
	private String column;
	private SortType sortType;

	public SortModel()
	{
	}

	public SortModel(String column, SortType sortType)
	{
		this.column = column;
		this.sortType = sortType;
	}

	public String getColumn()
	{
		return column;
	}

	public void setColumn(String column)
	{
		this.column = column;
	}

	public SortType getSortType()
	{
		return sortType;
	}

	public void setSortType(SortType sortType)
	{
		this.sortType = sortType;
	}
}
