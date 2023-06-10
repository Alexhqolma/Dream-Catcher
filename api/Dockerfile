FROM openjdk:17-ea-slim-buster
<<<<<<< HEAD
COPY . .
ENTRYPOINT ["./mvnw","spring-boot:run"]
=======
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","app.jar"]
>>>>>>> 0527abc943621f97c81763e250d88c69bed1655c
