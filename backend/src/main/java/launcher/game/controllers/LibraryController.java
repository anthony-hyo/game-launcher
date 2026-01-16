package launcher.game.controllers;

import launcher.game.exceptions.GameNotFoundException;
import launcher.game.models.games.Game;
import launcher.game.services.LibraryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class LibraryController {

	private final LibraryService libraryService;

	public LibraryController(LibraryService libraryService) {
		this.libraryService = libraryService;
	}

	@GetMapping("/api/library/games")
	public List<Game> all() {
		return (List<Game>) this.libraryService.getGames();
	}

	@GetMapping("/api/library/games/{id}")
	public Game find(@PathVariable int id) {
		return this.libraryService
			.gameById(id)
			.orElseThrow(() -> new GameNotFoundException(id));
	}

	@PostMapping("/api/library/games")
	public Game add(@RequestBody Game game) {
		return this.libraryService.addGame(game);
	}

	@PutMapping("/api/library/games/{id}")
	public Game updateDeploy(@PathVariable int id, @RequestBody Game newGame) {
		Optional<Game> gameOptional = this.libraryService.gameById(id);

		if (gameOptional.isEmpty()) {
			throw new GameNotFoundException(id);
		}

		Game game = gameOptional.get();

		game
			.setTitle(newGame.getTitle())
			.setDescription(newGame.getDescription())
			.setGenre(newGame.getGenre())
			.setUrl(newGame.getUrl())
			.setImageUrl(newGame.getImageUrl())
			.setCoverUrl(newGame.getCoverUrl())
			.setIconUrl(newGame.getIconUrl());

		this.libraryService.updateGame(game);

		return game;
	}

	@DeleteMapping("/api/library/games/{id}")
	public void deleteDeploy(@PathVariable int id) {
		this.libraryService.deleteGameById(id);
	}

}
