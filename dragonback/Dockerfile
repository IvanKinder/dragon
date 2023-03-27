FROM python:3.10 as core
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
WORKDIR /dragonback

RUN pip install --upgrade pip && \
    pip install poetry && \
    poetry config virtualenvs.create false

COPY . .

RUN poetry install --only main

RUN python manage.py collectstatic --noinput
