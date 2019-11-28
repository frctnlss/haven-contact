<?php

namespace App\Http\Controllers;

use App\Contact;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json(Contact::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store(Request $request)
    {
        $contact = new Contact($request->all());
        $contact->save();
        return response()->json($contact->fresh(), Response::HTTP_CREATED);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  Contact  $contact
     * @return Response
     */
    public function update(Request $request, Contact $contact)
    {
        $contact->fill($request->all());
        $contact->save();
        return response()->json([], Response::HTTP_NO_CONTENT);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Contact  $contact
     * @return Response
     */
    public function destroy(Contact $contact)
    {
        try {
            $contact->delete();
            return response()->json([], Response::HTTP_NO_CONTENT);
        } catch (Exception $exception) {
            Log::error('Error deleting contact: ' . $exception->getMessage(), $exception->getTrace());
            response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
