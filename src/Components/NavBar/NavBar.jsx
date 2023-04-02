import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../Auth/UserContext"

/** Navigation bar for site. Shows up on every page.
 *
 * When user is logged in, shows links to main areas of site and sign out button. 
 * When not, shows link to Login and Signup forms.
 *
 * Rendered by App.
 */

const NavBar = ({ logout }) => {
    const { currentUser } = useContext(UserContext);
    console.debug("NavBar", "currentUser=", currentUser);

    function loggedInNav() {
        return (
            <div>
                <div className="navBar flex justify-between items-center p-[3rem]">
                    <div className="logoDiv">
                        <h1 className="logo text-[25px] text-blueColor">
                            <a href="/">  Next<strong>Role</strong></a>
                        </h1>
                    </div>
                    <div className="menu flex gap-8">
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/jobs">  Jobs</NavLink>
                        </li>
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/companies">  Companies</NavLink>
                        </li>
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/profile">Profile</NavLink>
                        </li>
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/" onClick={logout}>Sign Out</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        );
    }

    function loggedOutNav() {
        return (
            <div>
                <div className="navBar flex justify-between items-center p-[3rem]">
                    <div className="logoDiv">
                        <h1 className="logo text-[25px] text-blueColor">
                            <a href="/">  Next<strong>Role</strong></a>
                        </h1>
                    </div>
                    <div className="menu flex gap-8">
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/jobs">  Jobs</NavLink>
                        </li>
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/companies">  Companies</NavLink>
                        </li>
                        <li className="p-2 text-gray-600 rounded hover:bg-gray-200 hover:text-white-700">
                            <NavLink to="/login">Login</NavLink>
                        </li>
                        <li className="p-2 bg-blueColor rounded-[5px] text-white font-semibold hover:bg-[#fdb44b]">
                            <NavLink to="/signup">Sign Up</NavLink>
                        </li>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </>
    )
}

export default NavBar
