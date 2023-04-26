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
}
