<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Post\IndexRequest;
use App\Services\Tables\PostService;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function __construct(
        private PostService $postService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index(IndexRequest $request)
    {
        return response()->json(
            $this->postService->getPostAtLocation($request->spotId),
            200,
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
