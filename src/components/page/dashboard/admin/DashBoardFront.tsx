"use client"
import { useLocalUser } from '@/context/user.Provider'
import { useGetAllUserQuery, useGetUserByEmailQuery } from '@/redux/features/auth/auth.api'
import { useGetTotalPostDocumentQuery } from '@/redux/features/post/postApi'
import React from 'react'
import { FaSquare } from 'react-icons/fa'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { PieChart } from "react-minimal-pie-chart"

const DashBoardFront = () => {
    const { data: users } = useGetAllUserQuery({})
    const { data: totalPost } = useGetTotalPostDocumentQuery({})
    const { user } = useLocalUser();
    const { data } = useGetUserByEmailQuery(`${user?.email}`)
    const remoteUser = data?.data;


    const cartData = [
        { title: '454', value: 50, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 25, color: '#6A2135' },
    ]
    const RechartData = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
       <div>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12 px-3 md:px-6'>
                {<h2 className='md:text-lg font-semibold text-center'>Total User - {users?.data?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Total Post - {totalPost?.data}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Total Follower - {remoteUser?.follower?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Total Folloing - {remoteUser?.following?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Votes Items - {remoteUser?.upVotesItem?.length}</h2>}
            </div>
            <div className='bg-gradient-to-r shadow rounded-lg from-slate-800 to-primary-700 text-white py-12'>
                {<h2 className='md:text-lg font-semibold text-center'>Verified - {remoteUser?.verified ? "Verified" : "No"}</h2>}
            </div>
        </div>
         <div className="mt-5 md:mt-10 border-t">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
             <div className="p-5 border rounded border-basePrimary">
                 <div className="">
                     <h3 className="font-semibold md:text-lg">Users Statistics</h3>
                     <div>
                         <span className="flex items-center gap-2">Total User:<FaSquare color='#E38627' /></span>
                         <span className="flex items-center gap-2">Admin:<FaSquare color='#C13C37' /></span>
                         <span className="flex items-center gap-2">User:<FaSquare color='#6A2135' /></span>

                     </div>
                 </div>
                <div>
                <PieChart
                     className="max-w-56 pb-5 mx-auto"
                     animate={true}
                     data={cartData}
                 />
                </div>
             </div>
             <div className="border rounded py-5 border-basePrimary">
                 <div className="space-y-6">
                     <h3 className="font-semibold md:text-lg mx-4">Rooms and Booking statistics</h3>
                     <LineChart width={500} height={250} data={RechartData} className="max-h-[400px]">
                         <XAxis dataKey="name" />
                         <YAxis />
                         <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                         <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                         <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                     </LineChart>
                 </div>
             </div>
         </div>
     </div>
       </div>
    )
}

export default DashBoardFront