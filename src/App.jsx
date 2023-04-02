import React, { useState, useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import HomePage from './Components/Homepage/Homepage'
import useLocalStorage from "./Hooks/useLocalStorage"
import MainRoutes from "./Components/MainRoutes/MainRoutes"
import UserContext from "./Components/Auth/UserContext"
import NextRoleApi from "./API/api"
import NavBar from './Components/NavBar/NavBar'
import jwt_decode from "jwt-decode"

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "nextRole-token";


function App() {

  const [infoLoaded, setInfoLoaded] = useState(false);
  const [applicationIds, setApplicationIds] = useState(new Set([]));
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);

  // console.debug(
  //   "App",
  //   "infoLoaded=", infoLoaded,
  //   "currentUser=", currentUser,
  //   "token=", token,
  // );

  /**
   * 
   * 'infoLoaded' :
   *  - false --> while loading user info from API --> show loading UI while data is being fetch
   *  - true --> set'infoLoaded' state to true--> remove loading UI 
   * 
   *  Decode the token --> set token on API class --> fetch user information.
   *  Once user info is fetched --> sets state of currentUser and applicationIds.
   *  User log in --> assign token, re-reuns when user logs out.
   *
   *  Dependency - 'token' , trigger re-run when 'token' value changes.
   * 
   */


  useEffect(function loadUserInfo() {
    console.debug("App useEffect loadUserInfo", "token=", token);

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt_decode(token);
          NextRoleApi.token = token;
          let currentUser = await NextRoleApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);


  /** Handles site-wide logout. */
  function logout() {
    console.log("logging out!")
    setCurrentUser(null);
    setToken(null);
  }

  /** Handles site-wide signup.
   *
   * Automatically logs them in (set token) upon signup.
   */
  async function signup(signupData) {
    try {
      let token = await NextRoleApi.signup(signupData);
      console.log(signupData)
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }


  /** Handles site-wide login.
   *
   * Make sure you await this function and check its return value!
   */
  async function login(loginData) {
    try {
      let token = await NextRoleApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  /** Checks if a job has been applied for. */
  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }


  /** Apply to a job: make API call and update set of application IDs. */
  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    NextRoleApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!infoLoaded) return 0;

  return (

    <BrowserRouter>
      <UserContext.Provider
        value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
        <NavBar logout={logout} />
        <MainRoutes login={login} signup={signup} />
      </UserContext.Provider>
    </BrowserRouter>

  )
}

export default App
