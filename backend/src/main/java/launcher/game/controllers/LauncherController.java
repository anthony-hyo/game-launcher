package launcher.game.controllers;

import launcher.game.objects.Launcher;
import launcher.game.objects.LauncherNews;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController()
public class LauncherController {

	@GetMapping("/api/launcher/games")
	public List<Launcher> getPerson() {
		return new ArrayList<>() {
			{
				add(new Launcher(
					"Unknown Game",
					"No description available.",
					"https://placehold.co/1920x1080?text=Game+Background&font=roboto",
					"https://placehold.co/300x450?text=Game+Cover&font=roboto",
					"https://placehold.co/100x100?text=Icon&font=roboto",
					"https://google.com",
					"Unknown",
					new ArrayList<>() {
						{
							add(new LauncherNews(
								"No description available.",
								LocalDateTime.now(),
								"There are no updates for this game.",
								"https://placehold.co/400x200?text=No+News"
							));
						}
					}
				));
				
				add(new Launcher(
					"Unknown Game 2",
					"No description available.",
					"https://placehold.co/1920x1080?text=Game+Background&font=roboto",
					"https://placehold.co/300x450?text=Game+Cover&font=roboto",
					"https://placehold.co/100x100?text=Icon&font=roboto",
					"https://google.com",
					"Unknown",
					new ArrayList<>() {
						{
							add(new LauncherNews(
								"No description available.",
								LocalDateTime.now(),
								"There are no updates for this game.",
								"https://placehold.co/400x200?text=No+News"
							));
						}
					}
				));
			}
		};
	}

}
