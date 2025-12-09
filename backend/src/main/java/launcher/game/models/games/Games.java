package launcher.game.models.games;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "games")
public class Games {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "title", unique = true)
	private String title;

	@Column(name = "description")
	private String description;

	@Column(name = "genre")
	private String genre;

	@Column(name = "url", unique = true)
	private String url;

	@Column(name = "image_url")
	private String imageUrl;

	@Column(name = "cover_url")
	private String coverUrl;

	@Column(name = "icon_url")
	private String iconUrl;

	@JsonIgnore
	@Column(name = "play_clicks")
	private int playClicks;

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

	public Games setId(int id) {
		this.id = id;
		return this;
	}

	public String getTitle() {
		return title;
	}

	public Games setTitle(String title) {
		this.title = title;
		return this;
	}

	public String getDescription() {
		return description;
	}

	public Games setDescription(String description) {
		this.description = description;
		return this;
	}

	public String getGenre() {
		return genre;
	}

	public Games setGenre(String genre) {
		this.genre = genre;
		return this;
	}

	public String getUrl() {
		return url;
	}

	public Games setUrl(String url) {
		this.url = url;
		return this;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public Games setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
		return this;
	}

	public String getCoverUrl() {
		return coverUrl;
	}

	public Games setCoverUrl(String coverUrl) {
		this.coverUrl = coverUrl;
		return this;
	}

	public String getIconUrl() {
		return iconUrl;
	}

	public Games setIconUrl(String iconUrl) {
		this.iconUrl = iconUrl;
		return this;
	}

	public int getPlayClicks() {
		return playClicks;
	}

	public Games setPlayClicks(int playClicks) {
		this.playClicks = playClicks;
		return this;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public Games setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
		return this;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public Games setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
		return this;
	}

}
