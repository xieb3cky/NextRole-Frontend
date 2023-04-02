import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineMapsHomeWork } from "react-icons/md"
import { faker } from '@faker-js/faker'

function CompaniesCard({ name, handle }) {

    return (
        <>
            <div class="flex justify-center items-center pt-10 gap-10 hover:scale-105 duration-200">
                <div class="w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
                    <Link to={`/companies/${handle}`}>
                        <div class="bg-blueColor text-white px-6 py-4">
                            <span className="flex justify-between items-center font-semibold text-[14px]-900">
                                <MdOutlineMapsHomeWork className="text-[18px] " /> {name}
                            </span>
                        </div>
                    </Link>
                    <div class="flex justify-between items-center px-6 py-4">
                        <div class="bg-[#152744] text-[12px] uppercase px-2 py-1 rounded-full border text-white font-bold">
                            Hiring</div>
                        <Link to={`/companies/${handle}`}>
                            <div class="italic text-[12px] uppercase px-2 py-1 rounded-xl text-white font-bold bg-[#fdb44b] 
                             hover:text-white hover:scale-110 duration-300">View Jobs</div>
                        </Link>
                    </div>

                    <div class="bg-gray-200 px-6 py-4 text-center border-t border-gray-200 text-textColor">
                        <span class="uppercase font-bold">Company Description</span>

                        <div class="italic text-center m-2 border rounded-lg p-4 bg-white-200">
                            {faker.lorem.paragraph(2)}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CompaniesCard;

