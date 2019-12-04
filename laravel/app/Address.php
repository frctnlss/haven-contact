<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Address extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
        'deleted_at'
    ];
    
    protected $hidden = [
        'deleted_at'
    ];

    public function contact()
    {
        return $this->belongsTo(Contact::class);
    }
}
