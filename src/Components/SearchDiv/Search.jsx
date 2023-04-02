import React, { useState } from "react"
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineCancel } from 'react-icons/md'
import { MdOutlineOtherHouses } from 'react-icons/md'


/** Search widget.
 *
 * Appears on Companies and Jobs so that these can be filtered down.
 *
 * This component doesn't *do* the searching, but it renders the search form and calls the `searchFor` 
 * function prop that runs in a parent to do the searching.
 *
 * { Companies, Jobs } -> SearchForm
 */

const Search = ({ searchFor, setJobs }) => {

    console.debug("SearchForm", "searchFor=", typeof searchFor)

    const [searchTerm, setSearchTerm] = useState("")

    /** Tell parent to filter */
    function handleSubmit(evt) {
        // take care of accidentally trying to search for just spaces
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined)
        setSearchTerm(searchTerm.trim())
    }

    /** Update form fields */
    function handleChange(evt) {
        setSearchTerm(evt.target.value)
    }

    /** Reset search term */
    function handleReset() {
        setSearchTerm("")
        setJobs([])
        setCompanies([])
    }
    return (
        <div className="searchDiv grid gp-10 bg-greyColor round-[10px] p-[3rem]">
            <form onSubmit={handleSubmit}>
                <div className="firstDiv flex items-center rounded-[8px] gap-[10px] 
                bg-white p-5 shadow-lg shadow-greyColor-700 ">
                    <div className="flex gap-2 items-center w-full ">
                        <BiSearchAlt className='text-[30px] icon fill-blueColor' />
                        <input type="text" value={searchTerm}
                            onChange={handleChange} className='bg-transparent text-blue-500 focus:outline-none w-3/4'
                            placeholder='Search by job title, companies, etc..' />
                    </div>
                    <MdOutlineCancel onClick={handleReset} className="text-[25px] fill-red-200
                            hover:text-textColor icon hover:scale-105 duration-200   "/>
                    <button type="submit" className="bg-[#fdb44b] w-1/4 py-4 rounded-[10px]
                    text-white cursor-pointer hover:bg-blueColor hover:scale-105 duration-200  ">Search</button>
                </div>
            </form >
        </div >
    )
}

export default Search
