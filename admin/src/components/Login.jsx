import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!email.trim() || !password.trim()) {
            return toast.error("Email and password are required.");
        }

        try {
            const response = await axios.post(`http://localhost:7000/api/user/admin`, { email, password });
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                setToken(response.data.token);
                toast.success("Login successful!");
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message || "An error occurred.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
            <div className="backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700">
                <h1 className="text-3xl font-bold text-center text-white mb-6">Admin Panel</h1>
                <p className="text-gray-300 text-center mb-4">Sign in to continue</p>

                <form onSubmit={onSubmitHandler} className="space-y-4">
                    <div>
                        <label className="block text-gray-300 font-semibold">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-gray-400 text-center text-sm mt-4">
                    &copy; 2025 Admin Panel. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;
