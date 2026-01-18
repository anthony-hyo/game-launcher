package launcher.game.repositories;

import launcher.game.entities.games.Game;
import org.jspecify.annotations.NonNull;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<@NonNull Game, @NonNull Integer> {

}
