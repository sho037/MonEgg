<?php

namespace App\Http\Resources\API\Spot;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class SpotResource extends ResourceCollection
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            $this->collection->map(function ($spot) {
                return [
                    'spotId' => $spot['id'],
                    'spotName' => $spot['name'],
                ];
            }),
        ];
    }
}
