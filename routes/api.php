<?php

use App\Http\Controllers\GameScoresController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/index', 'App\Http\Controllers\GameScoresController@index');
Route::post('/game_scores', 'App\Http\Controllers\GameScoresController@store');
Route::get('/find-games-score/{name}', 'App\Http\Controllers\GameScoresController@getScoreByName');