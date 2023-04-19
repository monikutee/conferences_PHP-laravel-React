<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/example', function (Request $request) {
    return response()->json(['message' => 'Hello from Laravel API!']);
});
