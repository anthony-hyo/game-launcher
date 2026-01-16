package launcher.game.repositories;

import launcher.game.models.games.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, Integer> {

}
