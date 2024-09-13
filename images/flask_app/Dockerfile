FROM python:3.9.7-slim

WORKDIR /app

COPY src/* ./
RUN pip install --no-cache-dir -r requirements.txt

CMD ["python", "app.py"]