import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../Auth/UserContext";
import NextRoleApi from "../../API/api";

/** Profile editing form.
 *
 * Displays profile form and handles changes to local form state.
 * Submitting the form calls the API to save, and triggers user reloading throughout the site.
 *
 * Routed as /profile
 * MainRoutes -> ProfileForm 
 */


function ProfileForm() {
    const navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    console.debug(
        "ProfileForm",
        "currentUser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
    );

    /** on form submit:
     * - attempt save to backend & report any errors
     * - if successful
     *    - clear previous error messages and password
     *     - show save-confirmed message
     *    - set current user info throughout the site
     */

    async function handleSubmit(evt) {
        evt.preventDefault();
        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };

        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await NextRoleApi.saveProfile(username, profileData);
            navigate("/");
        } catch (errors) {
            debugger;
            setFormErrors(errors);
            return;
        }

        setFormData(f => ({ ...f, password: "" }));
        setFormErrors([]);
        setSaveConfirmed(true);

        // trigger reloading of user information throughout the site
        setCurrentUser(updatedUser);
    }

    /** Handle form data changing */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(f => ({
            ...f,
            [name]: value,
        }));
        setFormErrors([]);
    }

    return (
        <section class="min-30-screen flex items-center justify-center hover:scale-105 duration-200">
            <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div class="md:w-1/2 px-8 md:px-16">
                    <h2 class="font-semibold text-[30px] text-textColor">Update Profile </h2>
                    <p class="text-[14px] mt-4 text-textColor">Please enter your details.</p>

                    <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                        <input class="w-full mt-4 p-2 px-4 text-[14px] rounded-xl bg-white-50 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required />
                        <div class="relative">
                            <input class="w-full p-2 px-4 text-[14px] rounded-xl bg-white-50 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]]"
                                type="password"
                                placeholder="Enter password to update"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required />
                        </div>
                        <div class="relative">
                            <input class="w-full p-2 px-4 text-[14px] rounded-xl bg-white-50 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required />
                        </div>
                        <div class="relative">
                            <input class="w-full p-2 px-4 text-[14px] rounded-xl bg-white-50 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required />
                        </div>
                        <div class="relative">
                            <input class="w-full mb-2 p-2 px-4 text-[14px] rounded-xl bg-white-50 outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-[#fdb44b]"
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required />
                        </div>
                        <button class="bg-blueColor text-[16px] rounded-xl text-white py-2 hover:scale-105 duration-300 hover:bg-[#fdb44b]">Update</button>
                    </form>
                </div>
                <div class="md:block hidden w-1/2">
                    <img class="rounded-2xl" src="https://images.unsplash.com/photo-1579389083046-e3df9c2b3325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
                </div>
            </div>
        </section>
    )
}

export default ProfileForm;