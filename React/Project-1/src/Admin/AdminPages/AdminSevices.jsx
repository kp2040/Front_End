import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'

function AdminSevices() {
  return (
    <div>
        <AdminHeader/>
        <AdminHero title="Admin Services" name="Services" />
        <h2 className='text-center my-4'>Admin Services</h2>
    </div>
  )
}

export default AdminSevices