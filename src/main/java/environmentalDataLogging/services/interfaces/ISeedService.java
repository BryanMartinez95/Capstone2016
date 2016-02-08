package environmentalDataLogging.services.interfaces;

public interface ISeedService
{
	int updateSeedData();

	void clearDatabase();

	void createUsers();

	void createDevices();

	void createUnits();

	void createTestMethods();

	void createMeasurements();

	void createClients();

	void createInvestigators();

	void createProjects();

	void createSamples();

	void createSampleIdentifiers();

}
