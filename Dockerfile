FROM node:16

# install package
RUN apt update 
RUN apt install -y nginx

# app files
WORKDIR /app
COPY . /app

# nginx conf
COPY config/default /etc/nginx/sites-enabled/default

# docker entrypoint
RUN chmod +x /app/docker-entrypoint.sh
ENTRYPOINT ["/app/docker-entrypoint.sh"]