<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PostLike extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = 'post_likes';

    protected $fillable = [
        'post_id',
        'user_id',
    ];

    /**
     * いいねした書き込み
     * 
     * 多対1の関係
     */
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
