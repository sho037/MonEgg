FROM php:8.1.4-fpm

WORKDIR /app

ENV LANG=C.UTF-8

RUN \
    # # Install Required Linux Packages
    apt-get update; \
    apt-get install -y --no-install-recommends \
        default-mysql-client \
        git \
        unzip \
        zlib1g-dev \
    ; \
    apt-get purge -y --auto-remove -o APT::AutoRemove::RecommendsImportant=false; \
    apt-get clean; \
    rm -rf /var/lib/apt/lists/* \
    ; \
    # # Install Required PHP extensions
    docker-php-ext-install \
        bcmath \
        mysqli \
        opcache \
        pdo_mysql \
        zip \
    ; \
    \
    useradd -m -s /bin/bash php

COPY --from=composer:2.5.5 /usr/bin/composer /usr/bin/composer

USER php

CMD ["/bin/bash", "./bin/start.sh"]
