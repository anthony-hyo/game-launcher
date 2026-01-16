package launcher.game.exceptions;

public class GameNotFoundException extends RuntimeException {

	public GameNotFoundException(int id) {
		super("Could not find the game " + id);
	}

}
