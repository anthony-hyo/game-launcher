package launcher.game.services;

import launcher.game.models.launcher.LauncherDeploys;
import launcher.game.repositories.LauncherDeploysRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LauncherService {

	public final LauncherDeploysRepository launcherDeploysRepository;

	public LauncherService(LauncherDeploysRepository launcherDeploysRepository) {
		this.launcherDeploysRepository = launcherDeploysRepository;
	}

	public List<LauncherDeploys> getLauncherDeploys() {
		return (List<LauncherDeploys>) this.launcherDeploysRepository.findAll();
	}

}
