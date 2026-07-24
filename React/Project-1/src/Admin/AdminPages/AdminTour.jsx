import React, { useEffect } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'

function AdminTour() {

  useEffect(() => {
    FetchApi()
  }, [])

  const { api, FetchApi } = UseCustomApiHook("http://localhost:3000/tour")

  // const tour = (category) => {
  //   return api.filter((data, index) => {
  //   return data.category === category
  // })
  // } 

  // const national = api.filter((data, index) => {
  //   return data.category === "National"
  // })

  // const international = api.filter((data, index) => {
  //   return data.category === "International"
  // })

  return (
    <div>
      <AdminHeader />
      <AdminHero title="Admin Tour Category" name="Category" />
      {/* <h1 className='text-center my-4'>Admin Tour Categoty</h1> */}
      <div className="container my-5">
        <table className="table text-center table-bordered table-hover">
          <thead>
            <tr className='table-dark'>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              api && api.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td>{data.category}</td>
                    <td><img src={data.image} alt="" style={{width: "100px"}} /></td>
                    <td>
                      <button className='btn btn-success'>View</button>
                      <button className='btn btn-info mx-2'>Edit</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default AdminTour