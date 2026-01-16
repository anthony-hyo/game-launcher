package launcher.game.repositories;

import launcher.game.models.launcher.LauncherDeploy;
import org.springframework.data.repository.CrudRepository;

public interface LauncherDeploysRepository extends CrudRepository<LauncherDeploy, Integer> {

}
