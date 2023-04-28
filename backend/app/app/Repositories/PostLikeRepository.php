<?php

namespace App\Repositories;

use App\Models\PostLike;

class PostLikeRepository
{
    /**
     * 指定された投稿にいいねをする
     */
    public function storePostLike(int $postId, int $userId)
    {
        PostLike::create([
            'post_id' => $postId,
            'user_id' => $userId
        ]);
    }

    /** 
     * 指定された投稿のいいねを解除する
     */
    public function destroyPostLike(int $postId, int $userId)
    {
        PostLike::where('post_id', $postId)
            ->where('user_id', $userId)
            ->delete();
    }
}
