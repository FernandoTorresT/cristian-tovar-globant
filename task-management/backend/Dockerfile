FROM tiangolo/uvicorn-gunicorn-fastapi:python3.9

ENV POETRY_VERSION 1.5.1

COPY . /backend

WORKDIR /backend

#RUN apt-get clean && apt-get update -y --allow-releaseinfo-change && \
#    apt-get install --no-install-recommends -y -q ca-certificates \
#    build-essential locales && \
#    apt-get install cron -y && \
#    apt-get install nano-tiny && \
#    apt-get install uuid-runtime && \
#    echo "LC_ALL=en_US.UTF-8" >> /etc/environment && \
#    echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen && \
#    echo "LANG=en_US.UTF-8" > /etc/locale.conf && \
#    locale-gen en_US.UTF-8 && \
#    pip3 install pip==20.2.4 && \
#    pip3 install wheel==0.35.1

# Change timezone to PST

RUN pip install -r requirements.txt

RUN echo "Hola,Mundo" && \
    echo 'ls' && \
    echo $PATH && \
    pip3 install poetry==$POETRY_VERSION && \
    poetry config virtualenvs.create false && \
    poetry install --no-dev --no-interaction --no-ansi --no-root && \
    # these packages were needed to run poetry commands inside container
    pip3 install packaging==20.4 platformdirs==2.4.0


EXPOSE 8000

CMD ["uvicorn","main:app","--host", "0.0.0.0", "--port","8000"]