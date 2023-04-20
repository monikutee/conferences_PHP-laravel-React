<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ConferenceController;


Route::post('/login', [AuthController::class, 'login']);

Route::apiResource('conferences', ConferenceController::class);

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
