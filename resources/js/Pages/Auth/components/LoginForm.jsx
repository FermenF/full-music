import React from "react";

const LoginForm = () => {

    return(
        <div className="bg-white m-3 p-5 md:m-10 md:p-14 lg:m-5 lg:p-8 xl:m-10 flex-1 rounded-3xl flex flex-col justify-between max-h-full">
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
                    <form>
                        <div className="grid gap-0 md:grid-cols-1">
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1">Email</label>
                                <input type="email" placeholder="full-music@fermenf.com" id="email" className="mb-2 bg-gray-100 border border-gray-300 p-3 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full" required/>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-1">Password</label>
                                <input type="password" placeholder="Your password" id="password" className="mb-2 bg-gray-100 border border-gray-300 p-3 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full" required/>
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                                </div>
                                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me?</label>
                            </div>
                            <div className="mt-10">
                                <button className="bg-green-400 btn-lg w-full font-semibold p-4 rounded-3xl border-gray-100 border-2 hover:bg-green-600 hover:text-white">
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

