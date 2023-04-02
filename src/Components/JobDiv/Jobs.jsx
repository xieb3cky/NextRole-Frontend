import React, { useState, useEffect } from "react"
import { FiMoreHorizontal } from "react-icons/fi"
import { MdOutlineMapsHomeWork, MdOutlinePriceChange } from "react-icons/md"
import JobCard from "./JobCard"
import JobsList from "./JobsList"
import Search from "../SearchDiv/Search"
import NextRoleApi from "../../API/api"


/** Show list of job cards.
 *
 * Used by both Jobs and CompanyDetail to list jobs. 
 * 
 * CompanyDetail -> Jobs -> JobsList --> JobCard
 *
 */

const Jobs = () => {
    console.debug("Jobs");

    const [jobs, setJobs] = useState(null);

    useEffect(function getAllJobsOnMount() {
        console.debug("Jobs useEffect getAllJobsOnMount");
        search();
    }, []);

    /** Triggered by search form submit; reloads jobs. */
    async function search(title) {
        let jobs = await NextRoleApi.getJobs(title);
        setJobs(jobs);
        console.log(jobs)
    }


    return (
        <>
            <div className='w-[85%] m-auto bg-white'>
                <Search searchFor={search} setJobs={setJobs} />
            </div>
            {jobs
                ? <div>
                    <JobsList jobs={jobs} />
                </div>
                : <p></p>
            }
        </>
    );

}

export default Jobs
