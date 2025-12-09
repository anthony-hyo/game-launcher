package launcher.game.objects;

import java.time.LocalDateTime;

public record GameNews(String title, LocalDateTime dateTime, String summary, String imageUrl) {
	
	//TODO: GET NEWS FROM API?

}
