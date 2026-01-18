package launcher.game.services;

import launcher.game.entities.launcher.LauncherDeploy;
import launcher.game.repositories.LauncherDeploysRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LauncherService {

	public final LauncherDeploysRepository launcherDeploysRepository;

	public LauncherService(LauncherDeploysRepository launcherDeploysRepository) {
		this.launcherDeploysRepository = launcherDeploysRepository;
	}

	public List<LauncherDeploy> getLauncherDeploys() {
		return (List<LauncherDeploy>) this.launcherDeploysRepository.findAll();
	}

}
