package environmentalDataLogging.enums;

/**
 * Enumeration to distinguish between account types.
 * ADMIN: the admin role which is top level access and has available to administrator functionality
 * USER: the user role is the base role with limited capabilities
 * SYSTEM: a special role type used by the application to create entities
 */
public enum RoleType
{
    /**
     * Admin role type.
     */
    ADMIN,
    /**
     * User role type.
     */
    USER,
    /**
     * System role type.
     */
    SYSTEM
}
