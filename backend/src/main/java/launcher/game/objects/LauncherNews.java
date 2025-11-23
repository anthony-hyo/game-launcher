package launcher.game.objects;

import java.time.LocalDateTime;

public record LauncherNews(String title, LocalDateTime dateTime, String summary, String imageUrl) {

}
