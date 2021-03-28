#!/bin/bash

JAVA_OPTS="$JAVA_OPTS -Duser.timezone=Europe/Bucharest"

exec java $JAVA_OPTS -jar /app.jar