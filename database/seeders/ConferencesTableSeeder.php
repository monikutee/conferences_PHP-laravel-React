<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Conferences;

class ConferencesTableSeeder extends Seeder
{
    public function run(): void
    {
        Conferences::create([
            'title' => 'Sample Conference',
            'description' => 'This is a sample conference',
            'start_date' => '2023-05-01 10:00:00',
            'end_date' => '2023-05-01 12:00:00',
            'address' => '123 Conference St, City, Country',
            'participant_count' => 100,
        ]);
    }
}
