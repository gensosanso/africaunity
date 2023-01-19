<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationRequest;
use App\Http\Resources\DemonstrationResource;
use App\Models\Demonstration;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class DemonstrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DemonstrationResource::collection(Demonstration::latest()->get());
    }


    public function demonstration_user($user) {
        
        return DemonstrationResource::collection(Demonstration::where('user_id', $user)->orderBy('id', 'desc')->get());
    }

    public function filter(Request $request){
       $demonstrations = Demonstration::where('status', '<>', 3);


       if ($request->date  != "") {
        $date = Carbon::createFromFormat('Y-m-d', $request->date);
      /*   $demonstrations->whereDate('start_date', $date); */
       $demonstrations->where(function ($query) use ($date) {
            $query->whereDate('start_date', '<=' , $date)->whereDate('end_date', '>=', $date);
        }); 
        } 
       

        if($request->enter_type != "") {
        $enter_type =  $request->enter_type;
        $demonstrations->where('enter_type', $enter_type);
        }

        if($request->demonstration_niche_id != ""){
            $demonstration_niche = $request->demonstration_niche_id;
            $demonstrations = $demonstrations->with(['demonstrationNiche' => function ($query) use ($demonstration_niche) {
                $query->where('id', $demonstration_niche);
            }])->whereHas('demonstrationNiche', function (Builder $query) use ($demonstration_niche) {
                $query->where('id', $demonstration_niche);
            });
            
        }

        if( $request->demonstration_mode_id != "") {
            $demonstration_mode = $request->demonstration_mode_id;
            $demonstrations = $demonstrations->with(['demonstrationMode' => function ($query) use ($demonstration_mode) {
                $query->where('id', $demonstration_mode);
            }])->whereHas('demonstrationMode', function (Builder $query) use ($demonstration_mode) {
                $query->where('id', $demonstration_mode);
            });
            }

        
            if( $request->demonstration_type_id != "") {
            $demonstration_type = $request->demonstration_type_id;
            $demonstrations = $demonstrations->with(['demonstrationType' => function ($query) use ($demonstration_type) {
                $query->where('id', $demonstration_type);
            }])->whereHas('demonstrationType', function (Builder $query) use ($demonstration_type) {
                $query->where('id', $demonstration_type);
            });
        }

        if ($request->city_id  != "") {
            $city = $request->city_id;
            $demonstrations = $demonstrations->with(['city' => function ($query) use ($city) {
                $query->where('id', $city);
            }])->whereHas('city', function (Builder $query) use ($city) {
                $query->where('id', $city);
            });
        }

        if ($request->zone_id  != "") {
            $zone = $request->zone_id;
            $demonstrations = $demonstrations->with(['zone' => function ($query) use ($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use ($zone) {
                $query->where('id', $zone);
            });
        }

        if ($request->continent_id  != "") {
            $continent = $request->continent_id;
            $demonstrations = $demonstrations->with(['continent' => function ($query) use ($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use ($continent) {
                $query->where('id', $continent);
            });
        }

        if ($request->country_id  != "") {
            $country = $request->country_id;
            $demonstrations = $demonstrations->with(['country' => function ($query) use ($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use ($country) {
                $query->where('id', $country);
            });
        }

        

        return DemonstrationResource::collection($demonstrations->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DemonstrationRequest $request)
    {
        $fields = $request->validated();

        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/events/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $fields['image'] = $filename;
        }

        $demonstration = Demonstration::create($fields);

        return new DemonstrationResource($demonstration);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Demonstration  $demonstration
     * @return \Illuminate\Http\Response
     */
    public function show(Demonstration $demonstration)
    {
        return new DemonstrationResource($demonstration);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Demonstration  $demonstration
     * @return \Illuminate\Http\Response
     */
    public function update(DemonstrationRequest $request, Demonstration $demonstration)
    {
        $fields = $request->validated();

        if ($request->file('image')) {
            $request->validate([
                'image' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/events/' . time() . '.' . $request->file('image')->extension();
            $request->file('image')->storePubliclyAs('public', $filename);
            $fields['image'] = $filename;
        }

        $demonstration->update($fields);

        return new DemonstrationResource($demonstration);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Demonstration  $demonstration
     * @return \Illuminate\Http\Response
     */
    public function destroy($demonstrations)
    {
        $demonstrations = json_decode($demonstrations);
        foreach ($demonstrations as  $demonstration) {
            $demonstration = Demonstration::find($demonstration);
            if (File::exists(public_path(substr($demonstration->image, 1, null)))) {
                File::delete(public_path(substr($demonstration->image, 1, null)));
            }
            $demonstration->delete();
        }

        return response()->noContent();
    }
}
