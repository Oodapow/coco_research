FROM python:3

COPY requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

COPY src /app

WORKDIR /app

CMD ["python", "main.py"]