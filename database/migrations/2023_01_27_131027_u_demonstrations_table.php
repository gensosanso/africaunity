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
        Schema::table('demonstrations', function (Blueprint $table) {
            $table->unsignedBigInteger('ministry_id')->nullable();
            $table->unsignedBigInteger('activity_area_id')->nullable();
 
            $table->foreign('ministry_id')->references('id')->on('ministries');
            $table->foreign('activity_area_id')->references('id')->on('activity_areas');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
