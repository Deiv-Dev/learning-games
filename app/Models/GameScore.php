<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameScore extends Model
{
    use HasFactory;
    protected $fillable = [
        'game_name',
        'score',
        'game_duration_milliseconds',
    ];
}
