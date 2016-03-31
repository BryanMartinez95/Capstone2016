package environmentalDataLogging.services.interfaces;

/**
 * The interface Seed service.
 */
public interface ISeedService
{
	/**
	 * Update seed data int.
	 *
	 * @return the int
	 */
	int updateSeedData();

	/**
	 * Clear database.
	 */
	void clearDatabase();

	/**
	 * Create users.
	 */
	void createUsers();

	/**
	 * Create devices.
	 */
	void createDevices();

	/**
	 * Create units.
	 */
	void createUnits();

	/**
	 * Create test methods.
	 */
	void createTestMethods();

	/**
	 * Create measurements.
	 */
	void createMeasurements();

	/**
	 * Create clients.
	 */
	void createClients();

	/**
	 * Create investigators.
	 */
	void createInvestigators();

	/**
	 * Create projects.
	 */
	void createProjects();

	/**
	 * Create samples.
	 */
	void createSamples();

	/**
	 * Create sample identifiers.
	 */
	void createSampleIdentifiers();

}
