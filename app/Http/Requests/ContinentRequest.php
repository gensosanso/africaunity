<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContinentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name_fr' => 'required|string',
            'name_en' => 'string',
            'name_es' => 'string',
            'name_pt' => 'string',
        ];
    }
}
