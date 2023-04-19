<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conferences extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'summary',
        'date',
        'address',
        'participant_count',
        'created_at',
        'updated_at',
    ];
}
