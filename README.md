# Game Launcher

[![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&labelColor=2496ED)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-MIT-5865F2.svg?labelColor=5865F2)](LICENSE)  
[![Java Version](https://img.shields.io/badge/Java-25-007396?logo=java&logoColor=white&labelColor=007396)](https://www.oracle.com/java/technologies/javase/jdk25-archive-downloads.html)  
[![Gradle](https://img.shields.io/badge/Gradle-9.2.1-8A6CFF?logo=gradle&logoColor=white&labelColor=8A6CFF)](https://gradle.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-4.0.0-6DB33F?logo=spring&logoColor=white&labelColor=6DB33F)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-18.1-336791?logo=postgresql&logoColor=white&labelColor=336791)](https://www.postgresql.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4.17-38B2AC?logo=tailwindcss&logoColor=white&labelColor=38B2AC)](https://tailwindcss.com/)
[![Angular](https://img.shields.io/badge/Angular-v21-DD0031?logo=angular&logoColor=white&labelColor=DD0031)](https://angular.io/)
[![Hibernate](https://img.shields.io/badge/Hibernate-59666C?logo=hibernate&logoColor=white&labelColor=59666C)](https://hibernate.org/)
[![Electron](https://img.shields.io/badge/Electron-191970?logo=electron&logoColor=white&labelColor=191970)](https://www.electronjs.org/)

A game launcher with **web** and **Electron desktop** versions. Browse games and open them in tabs.

---

## Preview (Web)

| [![Preview 5](/preview/5.png)](https://launcher.anthhyo.dev/home) | [![Preview 6](/preview/6.png)](https://launcher.anthhyo.dev/home) |
|-------------------------------------------------------------------|-------------------------------------------------------------------|
| [![Preview 7](/preview/7.png)](https://launcher.anthhyo.dev/home) | [![Preview 8](/preview/8.png)](https://launcher.anthhyo.dev/home) |

## Preview (Electron)

| [![Preview 1](/preview/1.png)](https://launcher.anthhyo.dev/home) | [![Preview 2](/preview/2.png)](https://launcher.anthhyo.dev/home) |
|---|---|
| [![Preview 3](/preview/3.png)](https://launcher.anthhyo.dev/home) | [![Preview 4](/preview/4.png)](https://launcher.anthhyo.dev/home) |

---

## Features

- Browse game library
- Multi-tab interface
- Track play counts
- Light/dark themes
- Electron desktop app with native controls
- Discord Rich Presence

---

## Stack

**Frontend:** Angular 21 + SCSS + Tailwind + RxJS signals + Electron

**Backend:** Spring Boot 4.0.0 + Java 25 + PostgreSQL + Spring Data JPA

---

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm start
# http://localhost:4200/
```

### Backend

```bash
cd backend
./gradlew bootRun
# http://localhost:8080/
```

---

## Architecture

### Frontend

**Services:**
- `LibraryService` – Fetch games, track plays
- `StateService` – Manage tabs
- `SettingsService` – Theme & settings

**Routes:**
- `/library` – Game grid
- `/library/viewer/:id` – Game details
- `/home` – Welcome (web only)
- `/download` – Download page (web only)

### Backend

**Endpoints:**
- `GET /api/library/games` – All games
- `GET /api/launcher/deploys` – Launcher updates

**Database:**
- `games` table – Game info (title, description, genre, urls, images)
- `launcher_deploys` table – Version info per OS

---

## Electron Integration

The Electron preload script exposes APIs to the frontend:

```javascript
// Window controls
window.electron.window_minimize()
window.electron.window_maximize()
window.electron.window_close()
window.electron.update_rich_presence(data)

// Tab management
window.tab.open(viewId)
window.tab.close(event, tab)
window.tab.openURL(url)

// Loading progress
window.loading.progress(value)
window.loading.text("message")
```

---

## Building

### Frontend

```bash
# Web
npm run build
# dist/game-launcher-angular/browser/

# Electron
npm run build-electron
# dist/game-launcher-angular/browser/ (with hash routing)
```

### Backend

```bash
# Build JAR
./gradlew clean build
# build/libs/launcher-0.0.1-SNAPSHOT.jar

# Run JAR
java -jar build/libs/launcher-0.0.1-SNAPSHOT.jar
```

---

## Docker

### Development (with hot reload)

```bash
docker-compose -f docker-compose.dev.yml up
```

Services:
- **PostgreSQL** (port 5432) - `root` / `321`
- **Backend** (port 8080) - Live with Maven
- **Frontend** (port 4200) - Live with Node

### Production

Create `.env`:
```bash
DATABASE_USER=root
DATABASE_PASSWORD=321
DATABASE_DB=game_launcher
DATABASE_URL=jdbc:postgresql://postgresql:5432/game_launcher
API_URL=http://backend:8080
```

Then run:
```bash
docker-compose -f docker-compose.prod.yml up
```

Services:
- **PostgreSQL** - Persisted volume
- **Backend** - Built JAR
- **Frontend** - Built Angular bundle

All on internal network `game_launcher-net`

---

## Configuration

### Frontend Environment Variables

Edit `src/environments/environment.ts`:

```typescript
{
  apiUrl: 'https://api-launcher.anthhyo.dev',
  showHome: true,
  showDownload: true,
  useHash: false,
  useWebview: false
}
```

### Backend Environment Variables

```bash
DATABASE_URL=jdbc:postgresql://localhost:5432/game_launcher
DATABASE_USER=root
DATABASE_PASSWORD=321
SERVER_PORT=8080
```

Or edit `src/main/resources/application.properties`

---

## Database Schema

**Games:**
```sql
CREATE TABLE games (
  id SERIAL PRIMARY KEY,
  title VARCHAR(128) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  genre VARCHAR(64) NOT NULL,
  url TEXT UNIQUE NOT NULL,
  image_url, cover_url, icon_url TEXT NOT NULL,
  play_clicks BIGINT DEFAULT 0
);
```

**Launcher Deployments:**
```sql
CREATE TABLE launcher_deploys (
  id SERIAL PRIMARY KEY,
  system VARCHAR(16),    -- Windows, Linux, macOS
  version VARCHAR(16),   -- 1.0.0
  description TEXT,      -- Features (comma-separated)
  url TEXT               -- Download link
);
```

---

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork the repo and submit pull requests.

---

## License

This project is licensed under the MIT License.
