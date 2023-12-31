<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password as RulesPassword;
use Illuminate\Support\Str;

class ForgotPasswordController extends Controller
{

    public function index(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required|string|email',
        ]);

        //check email
        $user = User::where('email', $fields['email'])->first();

        if (!$user) {
            return response(['status' => false, 'message' => 'This email address does not exist'], 401);
        }

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::RESET_LINK_SENT
            ? back()->with(['status' => __($status)])
            : back()->withErrors(['email' => __($status)]);
    }


    public function yo()
    {
        dd('yo;');
    }

    public function verif(Request $request)
    {
        $verif = DB::table('password_resets')->select('*')->where('email', htmlspecialchars($request->email))->get();

        if (!$verif || !Hash::check($request->token, $verif[0]->token)) {
            return redirect('/');
        } else {
            return redirect("/reset-password/$request->token?email=" . $_GET['email']);
        }
    }



    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();
                $user->markEmailAsVerified();
                $user->tokens()->delete();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return response([
                'message' => 'Password reset successfully'
            ]);
        }

        return response([
            'message' => __($status)
        ], 500);
    }
}
