<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('contact', 'ContactController')->except([
    'create',
    'show',
    'edit'
]);

Route::get('contact/{contact}/addresses', 'ContactController@showAddresses')
    ->name('contact.addresses');

Route::get('contact/{column}/{direction}/{size}/{page?}', 'ContactController@indexSortedPage')
    ->name('contact.sorted_page');

Route::resource('address', 'AddressController')->except([
    'create',
    'edit'
]);
