<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helpers\ResponseHelper;
use App\Models\User;

class AppController extends Controller
{
    public function fetchUser($id) {
        $user = User::where('id',$id)->first();
        if ($user){
            return ResponseHelper::responseDisplay(200, 'successful', $user);
        } else {
            return ResponseHelper::responseDisplay(400, 'operation failed', $user);
        }
    }
}
