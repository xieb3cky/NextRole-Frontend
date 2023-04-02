import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

/** Login form.
 *
 * Shows form and manages update to state on changes.
 * On submission:
 * - calls login function prop
 * - redirects to /companies route
 *
 * MainRoutes -> LoginForm 
 * Routed as /login
 */

function LoginForm({ login }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "LoginForm",
        "login=", typeof login,
        "formData=", formData,
        "formErrors", formErrors,
    );
    /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        setFormData({
            username: "",
            password: "",
        })
        if (result.success) {
            navigate("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    /** Update form data field */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
    }

    return (
        <section class="min-30-screen flex items-center justify-center hover:scale-105 duration-100">
            <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div class="md:w-1/2 px-8 md:px-16">
                    <h2 class="font-semibold text-[30px] text-textColor">Login</h2>
                    <p class="text-[14px] mt-4 text-textColor">Welcome Back!</p>
                    <p class="text-[14px] mt-4 text-textColor">Please enter your details.</p>

                    <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                        <input class="mt-4 p-2 px-4 text-[14px] rounded-xl bg-white-50 outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required />
                        <div class="relative">
                            <input class="p-2 px-4 w-full text-[14px] rounded-xl bg-white-50 outline-none transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required />
                        </div>
                        <button class="bg-blueColor text-[16px] rounded-xl text-white py-2 hover:scale-105 duration-300 hover:bg-[#fdb44b]">Login</button>
                    </form>

                    <div class="mt-3 text-xs flex justify-between items-center text-black">
                        <p>Don't have an account?</p>
                        <button class="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 ">
                            <Link to={`/signup`}>Sign Up</Link>
                        </button>
                    </div>
                </div>
                <div class="md:block hidden w-1/2">
                    <img class="rounded-2xl" src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                </div>
            </div>
        </section>
    )
}

export default LoginForm;