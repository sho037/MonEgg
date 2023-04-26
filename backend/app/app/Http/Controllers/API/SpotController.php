<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\API\Spot\SpotResource;
use App\Services\Tables\SpotService;
use Illuminate\Http\Request;

class SpotController extends Controller
{
    public function __construct(
        private SpotService $spotService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(
            new SpotResource($this->spotService->getAllSpots()),
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
