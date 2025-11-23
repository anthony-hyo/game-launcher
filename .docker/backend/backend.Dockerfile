# Maven build stage
FROM maven:3.9.11-amazoncorretto-24-alpine AS build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean package -DskipTests

# RUNTIME
FROM eclipse-temurin:24-jdk
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
