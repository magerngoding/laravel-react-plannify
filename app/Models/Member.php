<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Member extends Model
{
    use HasFactory;

    protected $guarded = []; // semua kolom ditable member diizinkan, kalau [] ada isinya berati yang tidak boleh diisi.

    protected $with = ['user'];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // relasi berbagai jenis model polymorphc 'card' & 'workspaces'
    public function memberable(): MorphTo
    {
        return $this->morphTo();
    }
}
