package environmentalDataLogging.models.views;

public class DtoModel
{
	private Object data;

	public DtoModel(Object data)
	{
		this.data = data;
	}

	public DtoModel()
	{
	}

	public Object getData()
	{
		return data;
	}

	public void setData(Object data)
	{
		this.data = data;
	}
}
