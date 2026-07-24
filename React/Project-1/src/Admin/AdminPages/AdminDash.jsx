import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'


function AdminDash() {
    return (
        <div>
            <AdminHeader/>
            <AdminHero title="Admin Dashboard" name="Dashboard" />
            <h1 className='text-center my-4'>Hello </h1>

        </div>
    )
}

export default AdminDash