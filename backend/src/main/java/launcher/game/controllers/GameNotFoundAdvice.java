package launcher.game.controllers;

import launcher.game.exceptions.GameNotFoundException;
import launcher.game.models.ErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GameNotFoundAdvice {

	@ExceptionHandler(GameNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public ErrorResponse gameNotFoundHandler(GameNotFoundException ex) {
		return new ErrorResponse(404, ex.getMessage());
	}

}
