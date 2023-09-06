<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\TenderResource;
use App\Http\Resources\TenderResource2;

use Illuminate\Http\Request;
use App\Models\User;
use App\Notifications\ApplyTenderNotification;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\File;

class TenderController extends Controller
{
    //

    public function index()
    {
        $tenders = Tender::latest()
        ->get();
        return TenderResource::collection(Tender::latest()->get());
    }

    public function filter(Request $request)
    {
        $tenders = Tender::where('status', '<>', 3);

        if ($request->searchKey != "") {
            $searchKey = $request->searchKey;
            $tenders = $tenders->whereRaw('LOWER(`title`) LIKE ? OR LOWER(`description`) LIKE ?', ['%' . trim(strtolower($searchKey)) . '%', '%' . trim(strtolower($searchKey)) . '%']);
        }

        if ($request->recruitment_agency != "") {
            $recruitment_agency = $request->recruitment_agency;
            $tenders = $tenders->with(['user' => function ($query) use ($recruitment_agency) {
                $query->where('recruitment_agency', $recruitment_agency);
            }])->whereHas('user', function (Builder $query) use ($recruitment_agency) {
                $query->where('recruitment_agency',  intval($recruitment_agency));
            });
        }

        if ($request->min_price != "") {
            $price = intval($request->min_price);
            $tenders = $tenders->where([
                ['max_price', '>=', $price],
                ['min_price', '<=', $price],
                ]);
        }

        if ($request->offer_type != "") {
            $offer_type = $request->offer_type;
            $tenders = $tenders->with(['offer_type' => function ($query) use ($offer_type) {
                $query->where('id', $offer_type);
            }])->whereHas('offer_type', function (Builder $query) use ($offer_type) {
                $query->where('id', $offer_type);
            });
        }

        if ($request->work_mode != "") {
            $work_mode = $request->work_mode;
            $tenders = $tenders->with(['work_mode' => function ($query) use ($work_mode) {
                $query->where('id', $work_mode);
            }])->whereHas('work_mode', function (Builder $query) use ($work_mode) {
                $query->where('id', $work_mode);
            });
        }

        if ($request->level_study != "") {
            $level_study = $request->level_study;
            $tenders = $tenders->with(['level_study' => function ($query) use ($level_study) {
                $query->where('id', $level_study);
            }])->whereHas('level_study', function (Builder $query) use ($level_study) {
                $query->where('id', $level_study);
            });
        }

        if ($request->year_experience != "") {
            $year_experience = $request->year_experience;
            $tenders = $tenders->with(['year_experience' => function ($query) use ($year_experience) {
                $query->where('id', $year_experience);
            }])->whereHas('year_experience', function (Builder $query) use ($year_experience) {
                $query->where('id', $year_experience);
            });
        }

        if ($request->contract_type != "") {
            $contract_type = $request->contract_type;
            $tenders = $tenders->with(['contract_type' => function ($query) use ($contract_type) {
                $query->where('id', $contract_type);
            }])->whereHas('contract_type', function (Builder $query) use ($contract_type) {
                $query->where('id', $contract_type);
            });
        }

        if ($request->city != "") {
            $city = $request->city;
            $tenders = $tenders->with(['city' => function ($query) use ($city) {
                $query->where('id', $city);
            }])->whereHas('city', function (Builder $query) use ($city) {
                $query->where('id', $city);
            });
        }

        if ($request->zone != "") {
            $zone = $request->zone;
            $tenders = $tenders->with(['zone' => function ($query) use ($zone) {
                $query->where('id', $zone);
            }])->whereHas('zone', function (Builder $query) use ($zone) {
                $query->where('id', $zone);
            });
        }

        if ($request->continent != "") {
            $continent = $request->continent;
            $tenders = $tenders->with(['continent' => function ($query) use ($continent) {
                $query->where('id', $continent);
            }])->whereHas('continent', function (Builder $query) use ($continent) {
                $query->where('id', $continent);
            });
        }

        if ($request->country != "") {
            $country = $request->country;
            $tenders = $tenders->with(['country' => function ($query) use ($country) {
                $query->where('id', $country);
            }])->whereHas('country', function (Builder $query) use ($country) {
                $query->where('id', $country);
            });
        }

        if ($request->currency != "") {
            $currency = $request->currency;
            $tenders = $tenders->with(['currency' => function ($query) use ($currency) {
                $query->where('id', $currency);
            }])->whereHas('currency', function (Builder $query) use ($currency) {
                $query->where('id', $currency);
            });
        }

        if ($request->activity_area != "") {
            $activity_area = $request->activity_area;
            $tenders = $tenders->whereHas('activity_areas', function (Builder $query) use ($activity_area) {
                $query->where('activity_areas.id', $activity_area);
            });
        }

        if ($request->language != "") {
            $language = $request->language;
            $tenders = $tenders->whereHas('languages', function (Builder $query) use ($language) {
                $query->where('languages.id', $language);
            });
        }


        return TenderResource::collection($tenders->get());
    }

    public function tenders_front()
    {

        $tenders = Tender::join('users', 'user_id', '=', 'users.id')
                        ->where('tenders.status', '<>', 3)
                        ->orderBy('tenders.id', 'desc')
                        ->orderBy('users.type', 'desc')
                        ->select('tenders.*');

        return TenderResource::collection($tenders->paginate(10));
    }

    public function tenders_home()
    {
        return TenderResource::collection(Tender::where('status', '<>', 3)->limit(5)
                                                           ->orderBy('id', 'desc')->get());
    }

    public function tenders_user($user)
    {
        return TenderResource::collection(Tender::where('user_id', $user)
                                           ->orderBy('id', 'desc')->get());
    }

    public function tenders_apply(Request $request)
    {
        $request->validate([
            'user' => 'required',
            'tender' => 'required',
            'message' => 'required|string',
            'email' => 'required|email',
            'name' => 'string|required',
            'cv' => 'required|mimes:pdf|max:40000'
        ]);

        $tender = Tender::find($request->tender);
        $applyUser = User::find($request->user);
        $authorUser = User::find($tender->user_id);

        $filename = '/uploads/cv/' . str_replace(" ", "_", $tender->title ). '_' . str_replace(" ", "_", $applyUser->firstname) . '_' . time() . '.' . $request->file('cv')->extension();
        $request->file('cv')->storePubliclyAs('public', $filename);


        $data = [
            'name' => $request->name,
            'message' => $request->message,
            'email' => $request->email,
            'cv' => $filename,
        ];

        $authorUser->notify(new ApplyTenderNotification($tender, $data));
        $response = [
            'status' => true,
            'message' => 'Apply Send successfully!',
        ];
        return response($response, 201);
    }
    
    public function store(Request $request)
    {
       
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'location' => 'required|string',
            'reference' => 'required|string',
            'company_name' => 'required|string',
            'company_email' => 'required|string|email',
            'company_website' => '',
            'min_price' => 'required|string',
            'max_price' => 'string|required',
            'user_id' => 'integer|required',
            'currency_id' => 'integer|required',
            'year_experience_id' => 'integer|required',
            'work_department_id' => 'integer|required',
            'work_mode_id' => 'integer|required',
            'contract_type_id' => 'integer|required',
            'size_company_id' => 'integer|required',
            'offer_type_id' => 'integer|required',
            'level_study_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'start_date' => 'date|required',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'activityAreas' => 'required',
            'languages' => 'required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'location' => $fileds['location'],
            'reference' => $fileds['reference'],
            'company_name' => $fileds['company_name'],
            'company_email' => $fileds['company_email'],
            'company_website' => $fileds['company_website'],
            'min_price' => $fileds['min_price'],
            'max_price' => $fileds['max_price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'year_experience_id' => $fileds['year_experience_id'],
            'work_department_id' => $fileds['work_department_id'],
            'contract_type_id' => $fileds['contract_type_id'],
            'work_mode_id' => $fileds['work_mode_id'],
            'start_date' => $fileds['start_date'],
            'size_company_id' => $fileds['size_company_id'],
            'offer_type_id' => $fileds['offer_type_id'],
            'level_study_id' => $fileds['level_study_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
          
        ];

        if ($request->file('company_logo')) {
            $request->validate([
                'company_logo' => 'required|mimes:png,jpg,jpeg,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('company_logo')->extension();
            $request->file('company_logo')->storePubliclyAs('public', $filename);
            $data['company_logo'] = $filename;
        }

        $tender = Tender::create($data);

        $tender->activity_areas()->toggle($request->activityAreas);
        $tender->languages()->toggle($request->languages);

        return new TenderResource($tender);
    }

    public function show(Tender $tender)
    {
        return new TenderResource($tender);
    }

    public function show2(Tender $tender)
    {
        return new TenderResource2($tender);
    }

    public function update(Request $request, Tender $tender)
    {
      
        $fileds = $request->validate([
            'title' => 'required|string|between:1,50',
            'description' => 'required|string',
            'location' => 'required|string',
            'reference' => 'required|string',
            'company_name' => 'required|string',
            'company_email' => 'required|string',
            'company_website' => '',
            'start_date' => 'date|required',
            'min_price' => 'required|string',
            'max_price' => 'string|required',
            'user_id' => 'integer|required',
            'currency_id' => 'integer|required',
            'contract_type_id' => 'integer|required',
            'year_experience_id' => 'integer|required',
            'work_department_id' => 'integer|required',
            'work_mode_id' => 'integer|required',
            'size_company_id' => 'integer|required',
            'offer_type_id' => 'integer|required',
            'level_study_id' => 'integer|required',
            'city_id' => 'integer|required',
            'zone_id' => 'integer|required',
            'continent_id' => 'integer|required',
            'country_id' => 'integer|required',
            'activityAreas' => 'required',
            'languages' => 'required',
        ]);
        $data = [
            'title' => $fileds['title'],
            'description' => $fileds['description'],
            'location' => $fileds['location'],
            'reference' => $fileds['reference'],
            'company_name' => $fileds['company_name'],
            'company_email' => $fileds['company_email'],
            'company_website' => $fileds['company_website'],
            'min_price' => $fileds['min_price'],
            'max_price' => $fileds['max_price'],
            'user_id' => $fileds['user_id'],
            'currency_id' => $fileds['currency_id'],
            'year_experience_id' => $fileds['year_experience_id'],
            'contract_type_id' => $fileds['contract_type_id'],
            'work_department_id' => $fileds['work_department_id'],
            'work_mode_id' => $fileds['work_mode_id'],
            'size_company_id' => $fileds['size_company_id'],
            'offer_type_id' => $fileds['offer_type_id'],
            'level_study_id' => $fileds['level_study_id'],
            'city_id' => $fileds['city_id'],
            'zone_id' => $fileds['zone_id'],
            'continent_id' => $fileds['continent_id'],
            'country_id' => $fileds['country_id'],
            'start_date' => $fileds['start_date'],
        ];

        if ($request->file('company_logo')) {
            $request->validate([
                'company_logo' => 'required|mimes:png,jpg,jpeng,gif|dimensions:max_width=2048,max_height=2048'
            ]);
            $filename = '/uploads/' . time() . '.' . $request->file('company_logo')->extension();
            $request->file('company_logo')->storePubliclyAs('public', $filename);
            if (File::exists(public_path(substr($tender->company_logo, 1, null)))) {
                File::delete(public_path(substr($tender->company_logo, 1, null)));
            }
            $data['company_logo'] = $filename;
        }

        $tender->update($data);

        $tender->activity_areas()->sync(explode(",", $request->activityAreas));
        $tender->languages()->sync(explode(",", $request->languages));

        return new TenderResource($tender);
    }

    public function tenders_mark(Tender $tender)
    {
        $tender->status = $tender->status == 3 ? 1 : 3;
        $tender->save();

        return response()->noContent();
    }

    public function destroy($tenders)
    {
        $tenders = json_decode($tenders);
        foreach ($tenders as  $tender) {
            $tender = Tender::find($tender);
            if (File::exists(public_path(substr($tender->company_logo, 1, null)))) {
                File::delete(public_path(substr($tender->company_logo, 1, null)));
            }
            $tender->delete();
        }

        return response()->noContent();
    }

    

}
