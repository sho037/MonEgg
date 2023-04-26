<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $connection = 'mysql';

    protected $table = 'posts';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'post_id',
        'spot_id',
        'user_id',
        'content',
    ];

    /**
     * 返信元の投稿
     * 
     * 多対1の関係
     */
    public function parent()
    {
        return $this->belongsTo(Post::class, 'post_id');
    }

    /**
     * 返信先の投稿
     * 
     * 1対多の関係
     */
    public function children()
    {
        return $this->hasMany(Post::class, 'post_id');
    }

    /**
     * 返信先の投稿を含む全ての投稿
     */
    public function descendants()
    {
        return $this->children()->with(['user', 'descendants']);
    }

    /**
     * 返信先の投稿を含む全ての投稿を配列で返却する
     */
    public function getDescendantsAttribute()
    {
        return $this->descendants()->get()->flatMap(function ($descendants) {
            return [$descendants];
        });
    }

    /**
     * 投稿が行われた場所
     * 
     * 多対1の関係
     */
    public function spot()
    {
        return $this->belongsTo(Spot::class);
    }

    /**
     * 投稿したユーザー
     * 
     * 多対1の関係
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
