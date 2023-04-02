import React, { useContext } from "react";
import UserContext from "../Auth/UserContext";
import Search from '../SearchDiv/Search'
import JobsList from '../JobDiv/JobsList'
import Footer from '../FooterDiv/Footer'
import Testimony from '../TestimonyDiv/Testimony'

/** Homepage of site.
 *
 * Shows welcome message or login/register buttons.
 *
 * Routed at /
 *
 * Routes -> Homepage
 */

const sampleJobs = [{ id: 177, title: 'Chief Executive Officer', salary: 83000, equity: null, companyName: 'Miller Woods', companyHandle: 'miller-woods-hernandez' },
{ id: 183, title: 'Software Engineer I', salary: 64000, equity: '0.067', companyName: 'Robbins Marsh', companyHandle: 'robbins-marsh-martin' },
{ id: 123, title: 'Chief of Staff', salary: 110000, equity: '0.016', companyName: 'Scott Smith', companyHandle: 'scott-smith' },
{ id: 175, title: 'Junior Accountant', salary: 92000, equity: null, companyName: 'Norman Harvey', companyHandle: 'norman-harvey' },
{ id: 120, title: 'Clinical cytogeneticist', salary: 152000, equity: '0.027', companyName: 'Mitchell Brown', companyHandle: 'mitchell-brown' },
{ id: 72, title: 'Textile technologist', salary: 171000, equity: '0.041', companyName: 'Smith LLC', companyHandle: 'smith-llc' }]

function Homepage() {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);

    return (
        <>
            <div className='w-[85%] m-auto bg-white'>
                <Search />
                <JobsList jobs={sampleJobs} />
                <Testimony />
                <Footer />
            </div>

        </>
    );
}

export default Homepage;
