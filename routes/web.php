<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GameScoresController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome/Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::get('/index', [GameScoresController::class, 'index'])->name('index.index');
Route::post('/game_scores', 'App\Http\Controllers\GameScoresController@store')->withoutMiddleware('web');

Route::get('/game-score/{name}', function ($name) {
    return Inertia::render('Games/ScoreDashboard/ScoreDashboard', ['name' => $name]);
})->name('games-scores');


Route::get('/find-games-score/{name}', [GameScoresController::class, 'getScoreByName'])->name('find-games-score.index');

Route::get('/numbers-game', function () {
    return Inertia::render('Games/NumbersGames/NumbersGame');
})->name('numbers-game');

Route::get('/letters-game', function () {
    return Inertia::render('Games/LettersGames/LettersGame');
})->name('letters-game');

Route::get('/colors-game', function () {
    return Inertia::render('Games/ColorsGames/ColorsGame');
})->name('colors-game');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
