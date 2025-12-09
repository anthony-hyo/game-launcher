package launcher.game.services;

import launcher.game.models.games.Games;
import launcher.game.repositories.GameRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LibraryService {

	private final GameRepository gameRepository;

	public LibraryService(GameRepository gameRepository) {
		this.gameRepository = gameRepository;
	}

	public Iterable<Games> getGames() {
		return this.gameRepository.findAll();
	}

	public Optional<Games> getGameById(int id) {
		return this.gameRepository.findById(id);
	}

}
