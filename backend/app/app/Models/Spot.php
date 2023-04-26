<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spot extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = 'spots';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
    ];

    /**
     * その場所で行われた投稿
     * 
     * 1対多の関係
     */
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
