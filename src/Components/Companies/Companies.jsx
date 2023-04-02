import React, { useState, useEffect } from "react"
import Search from "../SearchDiv/Search"
import NextRoleApi from "../../API/api"
import CompanyCard from "./CompaniesCard"

/** Show page with list of companies.
 *
 * On mount, loads companies from API.
 * Re-loads filtered companies on submit from search form.
 *
 * This is routed to at /companies
 *
 * Routes -> { CompanyCard, Search}
 */

function Companies() {

    const [companies, setCompanies] = useState(null);

    useEffect(function getCompaniesOnMount() {
        console.debug("Companies useEffect getCompaniesOnMount");
        search();
    }, []);

    /** Triggered by search form submit; reloads companies. */
    async function search(name) {
        let companies = await NextRoleApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <>
            <div className='w-[85%] m-auto bg-white'>
                <Search searchFor={search} setCompanies={setCompanies} />
                {companies
                    ? (
                        <div>
                            {companies.map(c => (
                                <CompanyCard
                                    key={c.handle}
                                    handle={c.handle}
                                    name={c.name}
                                    description={c.description}
                                />
                            ))}
                        </div>
                    ) : (
                        <p>Sorry, no results were found!</p>
                    )}
            </div>
        </>
    )
}

export default Companies;