package launcher.game.models.launcher;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "launcher_deploys")
public class LauncherDeploys {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "version")
	private String version;

	@Column(name = "description")
	private String description;

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

	public LauncherDeploys setId(int id) {
		this.id = id;
		return this;
	}

	public String getVersion() {
		return version;
	}

	public LauncherDeploys setVersion(String version) {
		this.version = version;
		return this;
	}

	public String getDescription() {
		return description;
	}

	public LauncherDeploys setDescription(String description) {
		this.description = description;
		return this;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public LauncherDeploys setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
		return this;
	}

	public LocalDateTime getUpdatedAt() {
		return updatedAt;
	}

	public LauncherDeploys setUpdatedAt(LocalDateTime updatedAt) {
		this.updatedAt = updatedAt;
		return this;
	}

}
