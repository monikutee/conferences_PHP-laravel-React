<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Conferences;
use Illuminate\Http\Request;

class ConferenceController extends Controller
{
    public function index()
    {
        $conferences = Conferences::all();
        return response()->json($conferences);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'address' => 'required',
        ]);

        $start_date = new \DateTime($request->start_date);
        $formattedStartDate = $start_date->format('Y-m-d H:i:s');

        $end_date = new \DateTime($request->end_date);
        $formattedEndDate = $end_date->format('Y-m-d H:i:s');

        $conference = Conferences::create([
            'title' => $request->title,
            'description' => $request->description,
            'start_date' => $formattedStartDate,
            'end_date' => $formattedEndDate,
            'address' => $request->address,
            'participant_count' => $request->participant_count,
        ]);

        return response()->json($conference, 201);
    }

    public function show(Conferences $conference)
    {
        return response()->json($conference);
    }

    public function update(Request $request, Conferences $conference)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'address' => 'required',
        ]);

        $start_date = new \DateTime($request->start_date);
        $formattedStartDate = $start_date->format('Y-m-d H:i:s');

        $end_date = new \DateTime($request->end_date);
        $formattedEndDate = $end_date->format('Y-m-d H:i:s');

        $conference->update([
            'title' => $request->title,
            'description' => $request->description,
            'start_date' => $formattedStartDate,
            'end_date' => $formattedEndDate,
            'address' => $request->address,
            'participant_count' => $request->participant_count,
        ]);

        return response()->json($conference);
    }

    public function destroy(Conferences $conference)
    {
        $conference->delete();
        return response()->json(['message' => 'Conference deleted successfully']);
    }
}
