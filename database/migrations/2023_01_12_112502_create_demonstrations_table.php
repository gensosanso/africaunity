<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('demonstrations', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->date('start_date');
            $table->date('end_date');
            $table->string('hourly');
            $table->string('place_link');
            $table->longText('description');
            $table->integer('status')->default(1);
            $table->enum('enter_type', ['free', 'paying'])->default('free');
            $table->string('price')->default('0');
            $table->string('image')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->foreignId('demonstration_type_id')->constrained();
            $table->foreignId('demonstration_mode_id')->constrained();
            $table->foreignId('demonstration_niche_id')->constrained();
            $table->foreignId('city_id')->constrained();
            $table->foreignId('zone_id')->constrained();
            $table->foreignId('continent_id')->constrained();
            $table->foreignId('country_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('demonstrations');
    }
};
