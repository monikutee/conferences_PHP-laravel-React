<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;


Route::get('/', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index']);

Route::get('/test-log', function () {
    Log::info('This is a test log entry');
    return 'A test log entry has been created';
});
