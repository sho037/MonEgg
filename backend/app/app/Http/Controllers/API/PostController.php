<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Post\IndexRequest;
use App\Http\Requests\API\Post\StoreRequest;
use App\Services\Tables\PostService;
use Exception;
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
    public function store(StoreRequest $request)
    {
        $this->postService->storePost(
            $request->post_id,
            $request->spot_id,
            $request->user_id,
            $request->content,
        );
        return response()->json(
            ['message' => '正常に投稿できました'],
            200
        );
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
