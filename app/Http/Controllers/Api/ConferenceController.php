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
            'start_date' => 'required',
            'end_date' => 'required',
            'address' => 'required',
        ]);

        $conference = Conferences::create($request->all());
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
            'start_date' => 'required',
            'end_date' => 'required',
            'address' => 'required',
        ]);

        $conference->update($request->all());
        return response()->json($conference);
    }

    public function destroy(Conferences $conference)
    {
        $conference->delete();
        return response()->json(['message' => 'Conference deleted successfully']);
    }
}
