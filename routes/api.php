<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ConferenceController;


Route::post('/login', [AuthController::class, 'login']);
Route::get('/generate_token', [AuthController::class, 'generate_token']);

Route::get('/conferences', [ConferenceController::class, 'index']);

Route::get('translations/{locale}', function ($locale) {
    $path = resource_path("lang/{$locale}");
    $files = glob("{$path}/*.php");

    $translations = [];

    foreach ($files as $file) {
        $key = basename($file, '.php');
        $translations[$key] = require $file;
    }

    return response()->json($translations);
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::post('/conferences', [ConferenceController::class, 'store']);
    Route::put('/conferences/{conference}', [ConferenceController::class, 'update']);
});

Route::delete('/conferences/{conference}', [ConferenceController::class, 'destroy']);
