<?php

use App\Http\Controllers\ArtistController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Auth::routes();

Route::get('/', function () {
    return Inertia::render('Home/Index');
})->name('index');

Route::get('/login', function() {
    return Inertia::render('Auth/Login');
})->name('login');

Route::middleware(['auth'])->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/genre/{id}/{name}/artists', [ArtistController::class, 'index'])->name('artists');
    Route::get('/artists/{id}/{name}', [ArtistController::class, 'show'])->name('artist');
});


