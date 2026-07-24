import React from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'

const AdminTourAdd = () => {
    return (
        <div>
            <AdminHeader />
            <AdminHero />

            <div className="container">
                <div className="row">
                    <form className='mt-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Enter Your Email</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                            <input type="text" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Image URL</label>
                            <input type="url" className="form-control" id="exampleInputPassword1" />
                        </div>
                       
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>    
                </div>
            </div>
        </div>
    )
}

export default AdminTourAdd

