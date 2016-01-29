package environmentalDataLogging.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;

public interface BaseRepository<T, ID extends Serializable> extends	JpaRepository<T, ID>
{
	T findByEmail(String email);

	T findByName(String name);
}
