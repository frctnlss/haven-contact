<?php

namespace App\Http\Controllers;

use App\Address;
use App\Http\Requests\Address\CreateAddress;
use App\Http\Requests\Address\UpdateAddress;
use Exception;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Throwable;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        return response()->json(Address::all(), Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  CreateAddress  $request
     * @return Response
     */
    public function store(CreateAddress $request)
    {
        try {
            $address = new Address($request->all());
            $address->saveOrFail();
            return response()->json($address->fresh(), Response::HTTP_CREATED);
        } catch (Throwable $exception) {
            Log::error('Error creating new contact: ' . $exception->getMessage(), $exception->getTrace());
            return response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  Address  $address
     * @return Response
     */
    public function show(Address $address)
    {
        return response()->json($address, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateAddress  $request
     * @param  Address  $address
     * @return Response
     */
    public function update(UpdateAddress $request, Address $address)
    {
        try {
            $address->fill($request->all());
            $address->saveOrFail();
            return response()->json([], Response::HTTP_NO_CONTENT);
        } catch (Throwable $exception) {
            Log::error('Error updating contact: ' . $exception->getMessage(), $exception->getTrace());
            return response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Address  $address
     * @return Response
     */
    public function destroy(Address $address)
    {
        try {
            $address->delete();
            return response()->json([], Response::HTTP_NO_CONTENT);
        } catch (Exception $exception) {
            Log::error('Error deleting contact: ' . $exception->getMessage(), $exception->getTrace());
            return response()->json(['message' => 'Unknown Error'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
