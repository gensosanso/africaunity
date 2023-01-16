<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\DemonstrationRequest;
use App\Http\Resources\DemonstrationResource;
use App\Models\Demonstration;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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

    public function byDate($date)
    {
        return DemonstrationResource::collection(Demonstration::whereDate('created_at', $date)->orderBy('id', 'desc')->get());
    }

    public function demonstration_user($user) {
        
        return DemonstrationResource::collection(Demonstration::where('user_id', $user)->orderBy('id', 'desc')->get());
    }

    public function filter(Request $request){}

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
