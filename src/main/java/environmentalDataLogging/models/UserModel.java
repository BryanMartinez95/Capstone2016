package environmentalDataLogging.models;

import environmentalDataLogging.enums.AccountType;
import environmentalDataLogging.enums.Status;
import java.util.UUID;

public class UserModel
{
    private UUID id;
    private String firstName;
    private String lastName;
    private String email;
    private Status status;
    private AccountType accountType;

    public UUID getId()
    {
        return id;
    }

    public void setId(UUID id)
    {
        this.id = id;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }

    public String getEmail()
    {
        return email;
    }

    public void setEmail(String email)
    {
        this.email = email;
    }

    public Status getStatus()
    {
        return status;
    }

    public void setStatus(Status status)
    {
        this.status = status;
    }

    public AccountType getAccountType()
    {
        return accountType;
    }

    public void setAccountType(AccountType accountType)
    {
        this.accountType = accountType;
    }
}
