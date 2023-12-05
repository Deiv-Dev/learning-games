<?php

namespace App\Http\Controllers;

use App\Models\GameScore;

use Cache;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class GameScoresController extends Controller
{
    const CACHE_TIME_SECONDS = 300; // 5min
    const CACHE_ALL_GAME_SCORES = "all-game-scores";

    public function index(): JsonResponse
    {
        if (Cache::has(self::CACHE_ALL_GAME_SCORES)) {
            return response()->json(Cache::get(self::CACHE_ALL_GAME_SCORES));
        }
        try {
            $gameScore = GameScore::all();
            if ($gameScore->isEmpty()) {
                return response()->json(['message' => 'Data is empty'], 404);
            }
            Cache::put(self::CACHE_ALL_GAME_SCORES, $gameScore, self::CACHE_TIME_SECONDS);
            return response()->json($gameScore, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch game scores.'], 500);
        }
    }

    public function getScoreByName($name): JsonResponse
    {
        if (Cache::has($name)) {
            return response()->json(Cache::get($name));
        }
        try {
            $gameScore = GameScore::where('game_name', $name)->get();
            if ($gameScore->isEmpty()) {
                return response()->json(['message' => 'Data is empty'], 404);
            }
            Cache::put($name, $gameScore, self::CACHE_TIME_SECONDS);
            return response()->json($gameScore, 200);
        } catch (QueryException $e) {
            return response()->json(['error' => 'Database error'], 500);
        } catch (ModelNotFoundException $e) {
            return response()->json(['message' => 'No data found'], 404);
        }
    }

    public function store(Request $request): JsonResponse
    {
        try {
            $data = $request->validate([
                'game_name' => 'required|string|max:255',
                'score' => 'required|integer',
                'game_duration_milliseconds' => 'required|integer',
            ]);

            GameScore::create($data);

            Cache::forget(self::CACHE_ALL_GAME_SCORES);
            Cache::forget($data['game_name']);

            return response()->json([
                'status' => 'success',
                'message' => 'Game score added successfully'
            ], 201);
        } catch (ValidationException $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }
    }
}
