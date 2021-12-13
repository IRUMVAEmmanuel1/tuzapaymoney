import React from 'react'
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Dashboard from '../studentModule/Dashboard'
import SideBar from '../../components/sidebar/sideBar';



function Layout() {
    return (
        // <Router>
        <div className="grid grid-cols-20 ">
             {/* sideBar */}
            <div className="bg-gray-100 col-span-3 flex flex-row">
            <SideBar/>
            <Dashboard />
            </div>
                                                             
           
            {/* otherPart */}

            <div className="col-span-9">
                
            </div>
        </div>
        // </Router>
    )
}

export default Layout
