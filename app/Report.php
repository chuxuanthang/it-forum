<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Report extends Model
{
    use SoftDeletes;
    
    protected $dates = ['deleted_at'];
    
    protected $fillable = [
        'user_id',
        'comment',
        'status',
    ];

    public function post()
    {
        return $this->belongsTo('App\Post');
    }
}
