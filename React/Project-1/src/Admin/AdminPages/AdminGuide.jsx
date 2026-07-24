import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'

function AdminGuide() {
  return (
    <div>
        <AdminHeader/>
        <AdminHero title="Admin Tour Guide" name="Guide" />
        <h1 className='text-center my-4'>Admin Travel Guide</h1>
    </div>
  )
}

export default AdminGuide