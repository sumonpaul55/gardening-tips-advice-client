"use client"
import dynamic from 'next/dynamic'
import React from 'react'
const DashboardFront = dynamic(()=> import("./../../../../../components/page/dashboard/admin/DashBoardFront"), {ssr:false})

const UserDashboard = () => {
    return (
        <div>
          <DashboardFront/>
          </div>
    )
}

export default UserDashboard