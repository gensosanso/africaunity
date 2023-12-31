<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Contracts\Auth\CanResetPassword;

class User extends Authenticatable implements MustVerifyEmail, CanResetPassword
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'firstname',
        'lastname',
        'status',
        'email',
        'password',
        'type',
        'avatar',
        'cover',
        'hide_email',
        'hide_phone',
        'hide_birthday',
        'recruitment_agency'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'hide_email' => 'boolean',
        'hide_phone' => 'boolean',
        'hide_birthday' => 'boolean',
    ];


    public function posts()
    {
        return $this->hasMany(Post::class);
    }

    public function personalPosts()
    {
        return $this->hasMany(PersonalPost::class);
    }

    public function demonstrations()
    {
        return $this->hasMany(Demonstration::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    public function announcementComments()
    {
        return $this->hasMany(AnnouncementComment::class);
    }

    public function announcements()
    {
        return $this->hasMany(Announcement::class);
    }

    public function jobOffers()
    {
        return $this->hasMany(JobOffer::class);
    }

    public function detail()
    {
        return $this->hasOne(Detail::class);
    }

    public function subscribers()
    {
        return $this->hasMany(Follower::class, 'subscriber');
    }

    public function subscriptions()
    {
        return $this->hasMany(Follower::class, 'subscription');
    }
}
