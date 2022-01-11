package co.com.sofka.mentoring35.repositories;

import co.com.sofka.mentoring35.collections.Random;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface RandomRepository extends ReactiveCrudRepository<Random, String> {
    
}
