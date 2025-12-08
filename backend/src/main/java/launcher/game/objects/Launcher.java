package launcher.game.objects;

import java.util.List;

public record Launcher(int id, String title, String description, String imageUrl, String coverUrl, String iconUrl, String url, String genre, List<LauncherNews> news) {

}
