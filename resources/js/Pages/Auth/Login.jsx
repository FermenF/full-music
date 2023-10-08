import React from "react";
import LoginForm from "./components/LoginForm";

const Login = () => {
    const imgBg = "/images/bg-login.jpg";

    return(
        <div className="grid w-full min-h-screen overflow-hidden grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0">
            <div className="bg-gray-800 h-full col-span-1 flex flex-col">
                <LoginForm />
            </div>
            <div className="bg-gray-900 h-full col-span-1 md:col-span-2">1</div>
        </div>
    );
}

export default Login;
