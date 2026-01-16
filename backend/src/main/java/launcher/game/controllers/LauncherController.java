package launcher.game.controllers;

import launcher.game.models.launcher.LauncherDeploy;
import launcher.game.services.LauncherService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LauncherController {

	public final LauncherService launcherService;

	public LauncherController(LauncherService launcherService) {
		this.launcherService = launcherService;
	}

	@GetMapping("/api/launcher/deploys")
	public List<LauncherDeploy> getLauncherDeploys() {
		return launcherService.getLauncherDeploys();
	}

}
