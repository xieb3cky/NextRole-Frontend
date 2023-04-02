import React from "react"
import JobCard from "./JobCard"

/** Show list of job cards.
 *
 * Used by both Jobs and CompanyDetail to list jobs. Receives an apply
 * func prop which will be called by JobCard on apply.
 *
 * Jobs -> JobsList -> JobCard
 * CompanyDetail -> JobsList -> JobCard
 *
 */

function JobsList({ jobs }) {
    console.debug("JobsList", "jobs=", jobs);

    return (
        <>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10 ">
                {jobs
                    ? jobs.map(job => (
                        <JobCard
                            key={job.id}
                            id={job.id}
                            title={job.title}
                            salary={job.salary}
                            companyName={job.companyName}
                            companyHandle={job.companyHandle}
                        />
                    ))
                    : <p>Sorry, no results were found!</p>
                }
            </div>
        </>
    );
}


export default JobsList