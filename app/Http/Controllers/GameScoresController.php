<?php

namespace App\Http\Controllers;

use App\Models\GameScore;

use Illuminate\Http\Request;

class GameScoresController extends Controller
{
    public function index()
    {
        $gameScore = GameScore::all();
        return response()->json($gameScore, 201);
    }

    public function getScoreByName($name)
    {
        $gameScore = GameScore::where('game_name', $name)->get();

        if (!$gameScore) {
            return response()->json(['message' => 'No data found'], 404);
        }

        return response()->json($gameScore, 200);
    }

    public function create()
    {
        // Show a form to create a new game score record
    }

    public function store(Request $request)
    {
        try {
            $validatedData = $request->validate([
                'game_name' => 'required|string|max:255',
                'score' => 'required|integer',
                'game_duration_milliseconds' => 'required|integer',
            ]);

            GameScore::create($validatedData);

            return response()->json([
                'status' => 'success',
                'message' => 'Game score added successfully'
            ], 201);
        } catch (ValidationException $e) {
            // Handle validation errors here
            return response()->json([
                'status' => 'error',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
                // Get validation errors
            ], 422); // Use an appropriate HTTP status code for validation failure
        }
    }

    public function edit($id)
    {
        // Show a form to edit an existing game score record
        // Retrieve the record by $id
    }

    public function update(Request $request, $id)
    {
        // Update an existing game score record in the database
        // Validate input, update data, and redirect
    }

    public function destroy($id)
    {
        // Delete a game score record by $id
    }
}
