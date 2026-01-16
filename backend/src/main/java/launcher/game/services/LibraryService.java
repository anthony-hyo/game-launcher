package launcher.game.services;

import launcher.game.models.games.Game;
import launcher.game.repositories.GameRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LibraryService {

	private final GameRepository gameRepository;

	public LibraryService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}

	public Iterable<Game> getGames() {
		return this.gameRepository.findAll();
	}

	public Optional<Game> gameById(int id) {
		return this.gameRepository.findById(id);
	}

	public void deleteGameById(int id) {
		this.gameRepository.deleteById(id);
	}

	public Game addGame(Game game) {
		return this.gameRepository.save(game);
	}

	public void updateGame(Game game) {
		this.gameRepository.save(game);
	}

}
