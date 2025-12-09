package launcher.game.controllers;

import launcher.game.models.launcher.LauncherDeploys;
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
	public List<LauncherDeploys> getLauncherDeploys() {
		return launcherService.getLauncherDeploys();
	}

}
