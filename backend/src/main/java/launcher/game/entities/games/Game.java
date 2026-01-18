package launcher.game.entities.games;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "games")
public class Game {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "title", unique = true, nullable = false, length = 128)
	private String title = "Game Example";

	@Column(name = "description", nullable = false, columnDefinition = "TEXT")
	private String description = "No description available.";

	@Column(name = "genre", nullable = false, length = 64)
	private String genre = "MMORPG";

	@Column(name = "url", unique = true, nullable = false, columnDefinition = "TEXT")
	private String url = "https://www.google.com/";

	@Column(name = "image_url", nullable = false, columnDefinition = "TEXT")
	private String imageUrl = "https://placehold.co/1920x1080?text=Background&font=roboto";

	@Column(name = "cover_url", nullable = false, columnDefinition = "TEXT")
	private String coverUrl = "https://placehold.co/300x450?textCover&font=roboto";

	@Column(name = "icon_url", nullable = false, columnDefinition = "TEXT")
	private String iconUrl = "https://placehold.co/100x100?text=Icon&font=roboto";

	@Column(name = "is_visible", nullable = false)
	private Boolean isVisible = false;

	@JsonIgnore
	@Column(name = "play_clicks", nullable = false)
	private Long playClicks = 0L;

	@Column(name = "created_at", updatable = false)
	@CreationTimestamp
	@JsonIgnore
	private LocalDateTime createdAt;

	@Column(name = "updated_at")
	@UpdateTimestamp
	@JsonIgnore
	private LocalDateTime updatedAt;

	public int getId() {
		return id;
	}

	public Game setId(int id) {
		this.id = id;
		return this;
	}

	public String getTitle() {
		return title;
	}

	public Game setTitle(String title) {
		this.title = title;
		return this;
	}

	public String getDescription() {
		return description;
	}

	public Game setDescription(String description) {
		this.description = description;
		return this;
	}

	public String getGenre() {
		return genre;
	}

	public Game setGenre(String genre) {
		this.genre = genre;
		return this;
	}

	public String getUrl() {
		return url;
	}

	public Game setUrl(String url) {
		this.url = url;
		return this;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Game setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
		return this;
	}

	public String getCoverUrl() {
		return coverUrl;
	}

	public Game setCoverUrl(String coverUrl) {
		this.coverUrl = coverUrl;
		return this;
	}

	public String getIconUrl() {
		return iconUrl;
	}

	public Game setIconUrl(String iconUrl) {
		this.iconUrl = iconUrl;
		return this;
	}

	public Boolean getIsVisible() {
		return isVisible;
	}

	public Game setIsVisible(Boolean isVisible) {
		this.isVisible = isVisible;
		return this;
	}

	public Long getPlayClicks() {
		return playClicks;
	}

	public Game setPlayClicks(Long playClicks) {
		this.playClicks = playClicks;
		return this;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public Game setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
		return this;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public Game setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
		return this;
	}

}
