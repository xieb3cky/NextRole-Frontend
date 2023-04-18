
# NextRole
Link to [Backend](https://github.com/xieb3cky/NextRole-Backend) 

## Summary 
Next Role is a fullstack web application that allows users to search for jobs and companies, create a profile, edit their profile information, and apply to jobs.


## Tech Stack

**Front-End:** React, JavaScript, TailwindCSS

**Back-End:** Node, Express, PostgreSQL


## Features
- Create and edit profile 
- Log in and sign up
- Apply to jobs
- Search & filter jobs and companies 


## Demo

### Homepage 
User can browse job listings and company information. The homepage displays a **navbar** to navigate to other pages of the application,  **search bar** to allow users to search for jobs and companies by name. It also features **testimonies** from success stories and **footer** with additional resources. 
<p align="center">
  <img src="https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/homepage.gif" alt="animated" />
</p>

### Jobs 
The job card displays details such as the job title, salary, general description, and company name. Users have the option to view more details the company by clicking on the job listing. They can also use the search bar to filter jobs based on the job title. If a user finds a job that interests them, they can click the *apply* button to apply for the job.

<p align="center">
  <img src="https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/jobs.gif" alt="animated" />
</p>

### Companies
The company card displays details such as the company title, general description, and related job postings. Users have the option to view jobs posted by company by clicking on *view jobs*. They can also use the search bar to filter companies based on the company title. 
<p align="center">
  <img src="https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/companies.gif" alt="animated" />
</p>

### Log In
Log in form, welcomes returning user and requires username and password. 
-  Once user submits their login credentials & backend authenticates user's identiy, then user is redirected to companies. 
-  Under profile tab, user can view their profile information and edit this information. 
<p align="center">
  <img src="https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/loginapply.gif" alt="animated" />
  <img src="https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/profileupdate.gif" alt="animated" />
</p>


### Sign Up
Sign up form, user can create a new account by providing the requested information. 
<p align="center">
  <img src="https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/signup.gif" alt="animated" />
</p>


## Components

- **Homepage**: The landing page of the application
- **Jobs**: Displays a list of jobs
    - JobsList: Renders job cards.
        - JobCard: Show information about a job.
- **Companies**: Displays a list of companies.
    - CompaniesCard: Renders information about a company.
        - CompanyDetail: Show details about a company.
- **Forms**: 
    - Profile: Displays user profile information.
    - Login: Allows the user to log in to their account.
    - Signup: Allows the user to create a new account.
- **Auth**: User context.
- **Footer**: Additional information about application. 
- **MainRoutes**: Side-wide routes.
- **NavBar**: Navigation bar for the site.
- **Search**: Search widget to filter companies and jobs.
- **Testimony** User reviews and rating. 

![Diagram](https://github.com/xieb3cky/NextRole-Frontend/blob/master/demo/Flow%20chart%20(Community).png)