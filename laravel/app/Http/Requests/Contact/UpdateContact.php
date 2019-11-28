<?php

namespace App\Http\Requests\Contact;

use Illuminate\Foundation\Http\FormRequest;

class UpdateContact extends FormRequest
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
            'id' => 'required|exists:contacts',
            'firstName' => 'string',
            'lastName' => 'string',
            'email' => 'string',
            'phoneNumber' => 'integer',
            'birthday' => 'date'
        ];
    }
}
