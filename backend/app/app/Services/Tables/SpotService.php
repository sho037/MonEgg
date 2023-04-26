<?php

namespace App\Services\Tables;

use App\Repositories\SpotRepository;

class SpotService
{
    public function __construct(
        private SpotRepository $spotRepository
    ) {
    }

    /**
     * すべてのスポットを取得する
     */
    public function getAllSpots()
    {
        return $this->spotRepository->getAllSpots();
    }
}
