<?php

namespace App\Services\Tables;

use App\Repositories\PostRepository;

class PostService
{
    public function __construct(
        private PostRepository $postRepository
    ) {
    }

    /**
     * 指定されたスポットの投稿を取得する
     * リレーションシップを利用して返信先の投稿を全て取得する
     */
    public function getPostAtLocation(int $spotId)
    {
        $posts = $this->postRepository->getPostAtLocation($spotId);
        $postWithDescendants = [];

        foreach ($posts as $post) {
            $postWithDescendant = $post;
            $postWithDescendant['descendant'] = $post->getDescendantsAttribute();
            $postWithDescendants[] = $postWithDescendant;
        }

        return $postWithDescendants;
    }

    /**
     * 投稿を保存する
     */
    public function storePost(int $postId = null, int $spotId, int $userId, string $content)
    {
        $this->postRepository->storePost($postId, $spotId, $userId, $content);
    }
}
