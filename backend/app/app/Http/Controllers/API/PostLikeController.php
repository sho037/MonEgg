<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\PostLike\DestroyRequest;
use App\Http\Requests\API\PostLike\StoreRequest;
use App\Services\Tables\PostLikeService;
use Illuminate\Http\Request;

class PostLikeController extends Controller
{
    public function __construct(
        private PostLikeService $postLikeService
    ) {
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $this->postLikeService->storePostLike(
            $request->post_id,
            $request->user()->id
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
    public function destroy(DestroyRequest $request)
    {
        $this->postLikeService->destroyPostLike(
            $request->post_id,
            $request->user()->id
        );
    }
}
