FROM node:18.16.0

WORKDIR /app

COPY ./app/package*.json /app/app

RUN chown -R node:node /app

USER node

CMD ["/bin/bash", "./bin/start.sh"]
