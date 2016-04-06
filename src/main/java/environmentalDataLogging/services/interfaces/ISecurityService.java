package environmentalDataLogging.services.interfaces;


import java.util.UUID;

/**
 * The interface Security service.
 */
public interface ISecurityService
{
    /**
     * Gets current user id.
     *
     * @return the current user id
     */
    UUID getCurrentUserId();
}
