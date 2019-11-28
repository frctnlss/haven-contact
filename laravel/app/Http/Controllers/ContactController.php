<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\Contact\CreateContact;
use App\Http\Requests\Contact\UpdateContact;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Throwable;

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
     * @param  CreateContact  $request
     * @return Response
     */
    public function store(CreateContact $request)
    {
        try {
            $contact = new Contact($request->all());
            $contact->saveOrFail();
            return response()->json($contact->fresh(), Response::HTTP_CREATED);
        } catch (Throwable $exception) {
            Log::error('Error creating new contact: ' . $exception->getMessage(), $exception->getTrace());
            return response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateContact  $request
     * @param  Contact  $contact
     * @return Response
     */
    public function update(UpdateContact $request, Contact $contact)
    {
        try {
            $contact->fill($request->all());
            $contact->saveOrFail();
            return response()->json([], Response::HTTP_NO_CONTENT);
        } catch (Throwable $exception) {
            Log::error('Error updating contact: ' . $exception->getMessage(), $exception->getTrace());
            return response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
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
            return response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Retrieve addresses associated with contact
     *
     * @param Contact $contact
     * @return Response
     */
    public function showAddresses(Contact $contact)
    {
        return response()->json($contact->addresses()->get()->toArray(), Response::HTTP_OK);
    }

    /**
     * Retrieve all contacts paginated and in sorted order
     *
     * @param string $column
     * @param string $direction
     * @param int $size
     * @param int $page
     * @return Response
     */
    public function indexSortedPage(string $column, string $direction, int $size, int $page = 0)
    {
        return response()->json(Contact::query()
            ->orderBy($column, $direction)
            ->limit($size)
            ->offset($page * $size)
            ->get()->toArray(), Response::HTTP_OK);
    }
}
