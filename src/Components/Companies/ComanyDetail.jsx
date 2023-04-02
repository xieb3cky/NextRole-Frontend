import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import NextRoleApi from "../../API/api"
import JobsList from "../JobDiv/JobsList"
import { MdOutlineMapsHomeWork } from "react-icons/md"
import { faker } from '@faker-js/faker'

/** Company Detail page.
 *
 * Renders information about company, along with the jobs at that company.
 *
 * Routed at /companies/:handle
 *
 * Routes -> CompanyDetail -> Jobs
 */

function CompanyDetail() {
    const { handle } = useParams();
    console.debug("CompanyDetail", "handle=", handle);

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobsForUser() {
        async function getCompany() {
            setCompany(await NextRoleApi.getCompany(handle));
            console.log(company)
        }

        getCompany();
    }, [handle]);


    return (
        <div>
            {
                company ?
                    <>
                        <div class="flex justify-center items-center pt-10 gap-10 hover:scale-105 duration-200  ">
                            <div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                                <Link to={`/companies/`}>
                                    <div class="bg-blueColor text-white px-6 py-4">
                                        <span className="flex justify-between items-center font-semibold text-[14px]-900">
                                            <MdOutlineMapsHomeWork className="text-[18px] " /> {company.name}
                                        </span>
                                    </div>
                                </Link>

                                <div class="px-6 py-4 border-t border-gray-200 text-textColor text-[14px]">
                                    <div class="border rounded-lg p-4 bg-white-200">
                                        {faker.lorem.paragraph(2)}
                                    </div>
                                </div>
                                <div class="bg-gray-200 px-6 py-4">
                                </div>
                            </div>
                        </div>
                        <JobsList jobs={company.jobs} />
                    </>
                    : <p>Sorry, no results found!</p>
            }
        </div>
    );
}

export default CompanyDetail;
