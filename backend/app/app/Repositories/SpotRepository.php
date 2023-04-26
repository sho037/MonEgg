<?php

namespace App\Repositories;

use App\Models\Spot;

class SpotRepository
{
    /**
     * すべてのスポットを取得する
     */
    public function getAllSpots()
    {
        return Spot::all();
    }
}
