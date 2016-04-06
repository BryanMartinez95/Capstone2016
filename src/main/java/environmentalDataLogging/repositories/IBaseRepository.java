package environmentalDataLogging.repositories;

import environmentalDataLogging.entities.BaseEntity;
import environmentalDataLogging.entities.User;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * The interface Base repository.
 *
 * @param <TEntity> the type parameter
 */
@NoRepositoryBean
public interface IBaseRepository<TEntity extends BaseEntity> extends JpaRepository<TEntity, UUID>
{
}
