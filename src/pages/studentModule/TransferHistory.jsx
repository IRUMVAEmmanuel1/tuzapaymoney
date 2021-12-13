import React from 'react'
import TopBar from '../../components/topbar/topBar'
import Table from '../../components/common/table';
import SideBar from '../../components/sidebar/sideBar';
const TransferHistory = () => {
    return (
        <div>
             <div className="flex flex-row col-span-3 ">
             <SideBar />
             <div className="grid grid-cols-14 ">
           
           
             <TopBar title="Transfer HISTORY"/>
            <Table/>
            </div>
            </div>
          </div>
       
    )
}

export default TransferHistory
