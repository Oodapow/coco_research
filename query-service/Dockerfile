FROM python:3

COPY requirements.txt /requirements.txt

RUN pip instlal -r /requirements.txt

COPY src /app

WORKDIR /app

CMD ["python", "main.py"]