<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Hash;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use Carbon\Carbon;
use Mail;
use DB;
use Session;
use App\Helpers\ResponseHelper;

use App\Models\User;

class AuthController extends Controller
{
    use AuthenticatesUsers;

    protected $maxAttempts = 5; // change to the max attemp you want.
    protected $decayMinutes = 5;

    // public function index() {
    //     if(Auth::guard('user')->check())
    //         return redirect('app');
    //     else
    //         return view('index');
    // }

    private function throttle_seconds() {
        if(session()->has('throttle_seconds')) {
            $throttle_seconds = session('throttle_seconds');
            $throttle_current_time = session('throttle_current_time');
            $throttle_seconds = $throttle_current_time - time();
            if($throttle_seconds < 0) {
                $throttle_seconds = 0;
                $this->forget_throttle_seconds();
            }
        } else {
            session(['throttle_seconds' => ($this->decayMinutes* 60)]);
            session(['throttle_current_time' => (time() + ($this->decayMinutes* 60))]);
            $throttle_seconds = session('throttle_seconds');
        }
        return $throttle_seconds;
    }

    private function forget_throttle_seconds() {
        if(session()->has('throttle_seconds')) {
            session()->forget('throttle_seconds');
            session()->forget('throttle_current_time');
        }
    }

    public function login(Request $request) {
        if ($this->hasTooManyLoginAttempts($request)) {
            $seconds = $this->throttle_seconds();
            $this->fireLockoutEvent($request);
            //$this->sendLockoutResponse($request);
            return ResponseHelper::responseDisplay(400, 'The given data was invalid.\nToo many login attempts. Please try again in '.$seconds.' seconds.', '');
        }
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|max:200',
            'password' => 'required|string'
        ]);

        if ($validator->fails()) {
            $this->incrementLoginAttempts($request);
            return ResponseHelper::responseDisplay(400, $validator->messages()->first(), '');
        }

        $email = $request->email;
        $password = $request->password;
        isset($request->remember_me) ? $remember = true : $remember = false;

        if (Auth::guard('user')->attempt(['email' => $email, 'password' => $password], $remember)) {
            // The user is active, not suspended, and exists.
            $this->clearLoginAttempts($request);
            $user = User::where('id',Auth::guard("user")->user()->id)->first();
            return ResponseHelper::responseDisplay(200, 'Login Successful', $user);

        }
        $this->incrementLoginAttempts($request);
        $this->forget_throttle_seconds();
        return ResponseHelper::responseDisplay(400, 'Wrong email or password', '');
    }

    public function logout(Request $request) {
        Auth::guard('user')->logout();
        session()->flush();
        return ResponseHelper::responseDisplay(200, 'Logout Successful', '');
    }

    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email|unique:users|max:80|min:7|regex:/^[^\s@]+@[^\s@]+\.[^\s@]+$/',
            'name' => 'required|string',
            'tel' => 'required|unique:users|numeric',
            'password' => 'required|min:5',
            'repassword' => 'required|min:5|same:password',
        ]);
        if ($validator->fails()) {
            return ResponseHelper::responseDisplay(400, $validator->messages()->first(), '');
        }
        $user = new User();
        $user->name = $request->name;
        $user->tel = $request->tel;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        if($user->save()){
            //$this->sendRegisterMail("Afrilearn - Successful Registration",$user->email,$user->name);
            return ResponseHelper::responseDisplay(200, 'Successful Registration. Thanks for registering with us', $user);
        } else {
            return ResponseHelper::responseDisplay(400, 'Error creating account. please try again', '');
        }
    }

    public function sendRegisterMail($subject,$email,$name){
        $data = array(
                'name'=> $name,
                'email'=> $email,
                'subject'=> $subject
        );
        Mail::send('mails/register', $data, function($message)
            use($email,$subject,$name) {
            $message->from('info@myafrilearn.com', 'Afrilearn');
            $message->to($email, $name)->subject($subject);
        });
    }

}
