FROM openjdk:11

RUN groupadd -g 999 appuser && useradd -r -u 999 -g appuser appuser
USER appuser

WORKDIR /home/appuser

COPY target/user-service.jar app.jar

COPY run.sh run.sh

ENTRYPOINT ["./run.sh"]
