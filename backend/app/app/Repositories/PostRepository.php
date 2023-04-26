<?php

namespace App\Repositories;

use App\Models\Post;

class PostRepository
{
    /**
     * 指定されたスポットの投稿を取得する
     * 取得する投稿は返信先の投稿を含まない
     */
    public function getPostAtLocation(int $spotId)
    {
        return Post::with(['user'])
            ->where([
                ['spot_id', $spotId],
                ['post_id', null]
            ])->get();
    }

    /**
     * 投稿を保存する
     */
    public function storePost(int $postId = null, int $spotId, int $userId, string $content)
    {
        Post::create([
            'post_id' => $postId,
            'spot_id' => $spotId,
            'user_id' => $userId,
            'content' => $content
        ]);
    }
}
