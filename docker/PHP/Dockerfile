FROM php:7.3-fpm

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && apt-get install -y --no-install-recommends \
        libmcrypt-dev \
        mariadb-client \
        libmagickwand-dev \
        libzip-dev \
    && pecl install imagick \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install \
        bcmath \
        pdo_mysql \
        zip

RUN pecl install mcrypt
RUN docker-php-ext-enable mcrypt

RUN groupadd -g 1000 www
RUN useradd -u 1000 -ms /bin/bash -g www www
COPY --chown=www:www . /var/www
USER www
