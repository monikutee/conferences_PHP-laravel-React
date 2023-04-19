<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;
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


Route::get('/', [\Rap2hpoutre\LaravelLogViewer\LogViewerController::class, 'index']);

Route::get('/test-log', function () {
    Log::info('This is a test log entry');
    return 'A test log entry has been created';
});
