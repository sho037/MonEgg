#!/bin/bash

echo "cd /app/app" >> ~/.bashrc

cd /app/app

composer install
php artisan serve --host=0.0.0.0