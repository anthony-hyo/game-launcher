# BUILD STAGE
FROM gradle:ubi9 AS build
WORKDIR /app
COPY backend/build.gradle backend/settings.gradle ./
COPY backend/src ./src
RUN gradle clean build -x test --no-daemon

# RUNTIME
FROM eclipse-temurin:24-jdk
WORKDIR /app
COPY --from=build /app/build/libs/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
