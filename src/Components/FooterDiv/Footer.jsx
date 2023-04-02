import React from "react"
import { BsFillTelephonePlusFill } from 'react-icons/bs'
import { MdMarkEmailUnread } from 'react-icons/md'
import { ImInstagram, ImFacebook2, ImTwitter } from 'react-icons/im'

const Footer = () => {


    return (
        <>
            <div className="card my-[2rem] flex justify-between p-[5rem] rounded-[20px] hover:scale-105 duration-200">
                <div>
                    <h1 className="text-white text-[25px] font-bold">
                        The key to your career success starts here.
                    </h1>
                    <h2 className="text-textColor text-[18px] font-bold mt-[3px]">Unlock your potential!</h2>
                </div>
                <button className="border-[1px] bg-greyColor rounded-[10px] py-[4px] px-[50px] text-[18px] font-semibold text-black hover:bg-blueColor hover:text-white hover:scale-105 duration-200">Sign Up</button>
            </div>


            <div className="footer p-[3rem] mb-2 bg-blueColor rounded-[20px] gap-6 grid grid-cols-4 m-auto
        items-center justify-center">
                <div>
                    <div className="logoDiv">
                        <h1 className="logo text-[25px] text-white pb-[1.5rem]">
                            Next<strong>Role</strong>
                        </h1>
                    </div>
                    <p className="text-white pb-[13px] opacity-70 leading-7">Job searching made fast and easy. </p>
                </div>
                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Company</span>
                    <div className="grid gap-3">
                        <li className="text-white opacity-[.7] hover:opacity-[1]">About Us</li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">Features</li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">FAQ</li>
                    </div>
                </div>
                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Resources</span>
                    <div className="grid gap-3">
                        <li className="text-white opacity-[.7] hover:opacity-[1]">Cover & Resume</li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">Career Coach</li>
                        <li className="text-white opacity-[.7] hover:opacity-[1]">Interview Guide</li>
                    </div>
                </div>
                <div className="grid">
                    <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white">Contact Us</span>
                    <div className="flex gap-2 mb-[4px] text-[14px] text-white">
                        <MdMarkEmailUnread className="text-[14px]" />
                        <small>
                            nextRole@email.com
                        </small>
                    </div>
                    <div className="flex gap-2 mb-[4px] text-[14px] text-white">
                        <BsFillTelephonePlusFill className="text-[12px]" />
                        <small>
                            555-555-555
                        </small>
                    </div>
                    <div className="flex icons gap-4 py-[1rem] gap-2">
                        <ImInstagram className="text-white" />
                        <ImFacebook2 className="text-white" />
                        <ImTwitter className="text-white" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
