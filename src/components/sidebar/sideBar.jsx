import React from 'react'
import {Link} from 'react-router-dom';
import Profile from "../../assets/charles.JPG"
import {DocumentIcon, ViewGridIcon, ArchiveIcon, ReplyIcon, AdjustmentsIcon} from '@heroicons/react/solid'

function sideBar() {
    return (
        <div>
        <div className="flex flex-col items-center sticky top-0 left-0">
            {/* Logo of System */}
            <div className="my-6">
            <h1 className="text-3xl font-bold text-blue-500">Customer Dashboard</h1>
            </div>

            {/* image of the user */}
            <div className="flex flex-col items-center mt-10">
                <img src={Profile} className=" w-20 h-20 object-cover rounded-full mb-2" alt="Profile"/>
                <h5 className="text-lg  text-gray-600">Emmanuel IRUMVA</h5>
                <h6 className="text-sm  text-gray-500">0040208107867</h6>
            </div>

            {/* Navigation List */}
            <div className="mt-12">
                <ul className=" text-gray-400">
                    <Link to="/Layout" className="mb-5 flex items-center">
                    <ViewGridIcon className="w-7 h-7 pr-2"/>
                    Dashboard
                    </Link>

                    <Link to="/makeComplaint" className="mb-5 flex items-center">
                   <DocumentIcon className="w-7 h-7 pr-2"/>
                    Make Complaints
                    </Link>

                    <Link to="/TransferHistory" className="mb-5 flex items-center">
                    <ArchiveIcon className="w-7 h-7 pr-2"/>
                    Transfer History
                    </Link>

                    <Link to="/feedback" className="mb-5 flex items-center">
                    <ReplyIcon className="w-7 h-7 pr-2"/>
                    Feedbacks
                    </Link>

                    <Link to="/accountSetting" className="mb-5 flex items-center">
                    <AdjustmentsIcon className="w-7 h-7 pr-2"/>
                    Account Settings
                    </Link>
                </ul>
            </div>
        </div>
        </div>
    )
}

export default sideBar
