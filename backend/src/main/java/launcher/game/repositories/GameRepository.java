package launcher.game.repositories;

import launcher.game.models.games.Games;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Games, Integer> {

}
