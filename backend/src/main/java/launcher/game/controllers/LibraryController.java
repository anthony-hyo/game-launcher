package launcher.game.controllers;

import launcher.game.models.games.Games;
import launcher.game.services.LibraryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LibraryController {

	private final LibraryService libraryService;

	public LibraryController(LibraryService libraryService) {
		this.libraryService = libraryService;
	}

	@GetMapping("/api/library/games")
	public List<Games> getGames() {
		return (List<Games>) this.libraryService.getGames();
	}

}
