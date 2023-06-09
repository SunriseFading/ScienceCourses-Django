FROM python:buster

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code

RUN python -m pip install --upgrade pip
ADD requirements.txt /code/
RUN python -m pip install -r requirements.txt