<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::prefix('/api')->group(function () {
    Route::post('/register', '\App\Http\Controllers\API\Auth\RegisterController@register')->name('register');
    Route::post('/login', '\App\Http\Controllers\API\Auth\LoginController@login')->name('login');
    Route::post('/logout', '\App\Http\Controllers\API\Auth\LogoutController@logout')->name('logout');
});
