FROM openjdk:17-ea-slim-buster
ENTRYPOINT ["./mvnw","spring-boot:run"]
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
