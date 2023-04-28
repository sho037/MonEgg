<?php

namespace App\Services\Tables;

use App\Repositories\PostLikeRepository;

class PostLikeService
{
    public function __construct(
        private PostLikeRepository $postLikeRepository
    ) {
    }

    /**
     * 指定された投稿にいいねをする
     */
    public function storePostLike(int $postId, int $userId)
    {
        $this->postLikeRepository->storePostLike($postId, $userId);
    }

    /** 
     * 指定された投稿のいいねを解除する
     */
    public function destroyPostLike(int $postId, int $userId)
    {
        $this->postLikeRepository->destroyPostLike($postId, $userId);
    }
}
