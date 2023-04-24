#!/bin/bash

echo "cd /app/app" >> ~/.bashrc

cd /app/app

composer install

if [ ! -e .env ]; then
  cp .env.example .env
  php artisan key:generate
fi

php artisan serve --host=0.0.0.0