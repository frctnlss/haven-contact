<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Contact extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id',
        'createdAt',
        'updatedAt',
        'deletedAt'
    ];

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }
}
