<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('/post')->name('post.')->controller(\App\Http\Controllers\API\PostController::class)->group(function () {
    Route::get('/', 'index')->name('index');

    Route::middleware('auth:sanctum')->group(function () {
        Route::post('/store', 'store')->name('store');
    });
});

Route::prefix('/spot')->name('spot.')->controller(\App\Http\Controllers\API\SpotController::class)->group(function () {
    Route::get('/', 'index')->name('index');
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return new \App\Http\Resources\API\User\RegisterUserResource($request->user());
});
