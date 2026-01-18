package launcher.game.repositories;

import launcher.game.entities.launcher.LauncherDeploy;
import org.jspecify.annotations.NonNull;
import org.springframework.data.repository.CrudRepository;

public interface LauncherDeploysRepository extends CrudRepository<@NonNull LauncherDeploy, @NonNull Integer> {

}
