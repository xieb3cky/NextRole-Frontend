import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "../Homepage/Homepage"
import Jobs from "../JobDiv/Jobs"
import LoginForm from "../Forms/LoginForm"
import SignupForm from "../Forms/SignupForm"
import ProfileForm from "../Forms/ProfileForm"
import Companies from "../Companies/Companies"
import CompaniesCard from "../Companies/CompaniesCard"
import CompanyDetail from "../Companies/ComanyDetail"
import PrivateRoute from "./PrivateRoutes"

/** Site-wide routes.
 *
 * Parts of site should only be visitable when logged in. Those routes are
 * wrapped by <PrivateRoute>, which is an authorization component.
 *
 * Visiting a non-existant route redirects to the homepage.
 */


const MainRoutes = ({ login, signup }) => {

    console.debug(
        "Routes",
        `login=${typeof login}`,
        `signup=${typeof signup}`,
    );

    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<LoginForm login={login} />} />
            <Route path="/signup" element={<SignupForm signup={signup} />} />
            <Route path="/profile" element={<ProfileForm />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:handle" element={<CompanyDetail />} />
            <Route path="*" element={<Navigate to='/' />}></Route>
        </Routes>
    )
}

export default MainRoutes;
