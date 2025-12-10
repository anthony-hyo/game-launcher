# BUILD STAGE
FROM gradle:jdk25-noble AS build
WORKDIR /app
COPY backend/build.gradle backend/settings.gradle ./
COPY backend/src ./src
RUN gradle clean build -x test --no-daemon

# RUNTIME
FROM eclipse-temurin:25-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
