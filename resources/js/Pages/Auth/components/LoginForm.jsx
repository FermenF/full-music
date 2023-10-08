import React from "react";
import { useForm } from '@inertiajs/react'

const LoginForm = () => {

    const { data, setData, post, processing, reset, errors } = useForm({
      email: '',
      password: '',
      remember: false,
    });

    function handleSubmit(e){
        e.preventDefault();
        post('/login', {
            onSuccess: () => reset('email', 'password', 'remember')
        });
    }

    return(
        <div className="bg-white m-3 p-5 md:m-10 md:p-14 lg:m-5 lg:p-8 xl:m-14 xl:p-10 flex-1 rounded-3xl flex flex-col justify-between max-h-full">
            <h1 className="text-3xl md:text-3xl font-bold sm:text-2xl text-center mt-5">
                !"!"
                FULL MUSIC
            </h1>
            <div className="">
                <p className="text-2xl font-semibold">
                    Welcome to <br/>
                    Full Music Web
                </p>
                <div className="mt-14 mb-32">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-0 md:grid-cols-1">
                            <div className="mb-2">
                                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1">Email</label>
                                <input type="email" value={ data.email } onChange={ e => setData('email', e.target.value) } placeholder="full-music@fermenf.com" id="email" className="bg-gray-100 border border-gray-300 p-3 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full" required/>
                                {errors.email && <div className="text-red-500">{errors.email}</div>}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-1">Password</label>
                                <input type="password" value={ data.password } onChange={ e => setData('password', e.target.value) } placeholder="Your password" id="password" className="bg-gray-100 border border-gray-300 p-3 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full" required/>
                                {errors.password && <div className="text-red-500">{errors.password}</div>}
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" checked={ data.remember } onChange={ e => setData('remember', e.target.value)} className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">Remember me?</label>
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="bg-green-400 btn-lg w-full font-semibold p-4 rounded-3xl border-gray-100 border-2 hover:bg-green-600 hover:text-white" disabled={ processing }>
                                    LOGIN
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default LoginForm;
