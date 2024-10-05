import React from 'react'

const UserDashboard = () => {
    return (
        <div>
            <h2 className='mb-3 text-lg md:text-xl font-semibold font-roboto_slab lg:text-2xl'>Your Activities here 😀</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className="bg-white p-4 min-h-[200px] rounded-lg shadow-lg">All activity</div>
                <div className="bg-white p-4 min-h-[200px] rounded-lg shadow-lg">All activity</div>
                <div className="bg-white p-4 min-h-[200px] rounded-lg shadow-lg">All activity</div>
                <div className="bg-white p-4 min-h-[200px] rounded-lg shadow-lg">All activity</div>
                <div className="bg-white p-4 min-h-[200px] rounded-lg shadow-lg">All activity</div>
                <div className="bg-white p-4 min-h-[200px] rounded-lg shadow-lg">All activity</div>
            </div>
        </div>
    )
}

export default UserDashboard