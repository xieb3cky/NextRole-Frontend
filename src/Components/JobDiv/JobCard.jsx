import React, { useContext, useState, useEffect } from "react"
import { faker } from '@faker-js/faker'
import { FiMoreHorizontal } from "react-icons/fi"
import { MdOutlineMapsHomeWork, MdOutlinePriceChange, MdOutlineDescription } from "react-icons/md"
import UserContext from "../Auth/UserContext"
import { useNavigate, Link } from "react-router-dom";


/** Show limited information about a job.
 *
 * Is rendered by JobsList to show a "card" for each job.
 *
 * Jobs -> JobsList --> JobCard
 */

const Jobs = ({ id, title, company, salary, companyName, companyHandle }) => {

    console.debug("JobCard");
    const navigate = useNavigate();


    const { hasAppliedToJob, applyToJob, currentUser } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(function updateAppliedStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", "id=", id);

        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    /** Apply for a job */
    async function handleApply(evt) {
        if (currentUser) {
            if (hasAppliedToJob(id)) {
                return
            }
            applyToJob(id);
            setApplied(true);
        } else {
            navigate("/signup");
        }
    }

    return (
        <>
            <div className={`${applied ? 'group group/item singleJob w-[250px] p-[20px] text-white bg-blueColor rounded[10px] hover:shadow-lg shadow-greyIsh hover:scale-105 duration-200' :
                'group group/item singleJob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh hover:scale-105 duration-200'}`}>
                <span className="flex justify-between items-center gap-4">
                    <h1 className={`${applied ? 'text-[16px] font-semibold text-white' :
                        'text-[16px] font-semibold text-textColor group-hover:text-white'}`}>{title}</h1>
                    <span className="flex items-center text-[#ccc] gap-1">
                        <FiMoreHorizontal />
                    </span>
                </span>
                <Link to={`/companies/${companyHandle}`}>
                    <h6 className="text-[#ccc] hover:text-[#fdb44b] hover:underlin">{companyName}</h6>
                </Link>

                <p className={`${applied ? 'text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] text-white' :
                    'text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white '}`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                <div className="salary flex items-center gap-2 text-[#ccc]">
                    <span className="flex justify-between items-center gap-2 text-[14px] text-green-600 py-[1rem] block group-hover:text-white">
                        <MdOutlinePriceChange className="text-[18px] fill-current text-green-600 " />
                        {salary ? formatSalary(salary) : "N/A"}
                    </span>
                </div>
                <button className={`${applied ? 'border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor bg-[#fdb44b] group-hover/item:text-textColor hover:scale-100 duration-100' :
                    'border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-[#fdb44b] group-hover/item:text-textColor hover:scale-100 duration-100'}`} onClick={handleApply}>
                    {applied ? "Applied" : "Apply"}
                </button>
            </div>
        </>

    )
}

/** Render integer salary like '$1,250,343'
 * 
 * Input salary is formatted to string.
 * Then loop through the salary string from end to beginning, for each digit - checks if the current index i is greater than 0 and divisible by 3.
 * If true, we have reached a multiple of three digits (e.g., 1,000), add a comma to the output string abd push to digitsRev array.
 * 
 * DigitsRev array is reversed using the reverse() method and joined into a string using the join() method. 
 * The resulting string is the formatted salary with commas separating the thousands.
 * 
 */

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();

    for (let i = salaryStr.length - 1; i >= 0; i--) {
        digitsRev.push(salaryStr[i]);
        if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }

    return digitsRev.reverse().join("");
}

export default Jobs
