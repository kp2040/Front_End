import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'

function AdminDestination() {

    // const [destination, setdestination] = useState([])

    // useEffect(() => {
    //     DestinationaFetchData()
    // }, [])

    // const DestinationaFetchData = async () => {
    //     const res = await axios.get("http://localhost:3000/destinations")
    //     console.log(res.data)
    //     setdestination(res.data)
    // }

    useEffect(() => {
        FetchApi()
    }, [])

    const {api, FetchApi} = UseCustomApiHook("http://localhost:3000/destinations")
    

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Admin Travel Destination" name="Destination" />
            <h1 className='text-center my-4'>Admin Travel Destination</h1>
            <div className="container">
                <table className="table text-center">
                    <thead className='table-dark'>
                        <tr>
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
                                        <td>
                                            <img src={data.image} alt="" style={{width: "100px"}} />
                                        </td>
                                        <td>
                                            <button className="btn btn-info">View</button>
                                            <button className="btn btn-success mx-2">Edit</button>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {/* <div className="container-fluid destination py-5">
                <div className="container py-5">
                    <div className="tab-class text-center">
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-xl-8">
                                        <div className="row g-4">
                                            {
                                                destination && destination.map((data, index) => {
                                                    return (
                                                        <div className="col-lg-6" key={data.id}>
                                                            <div className="destination-img">
                                                                <img className="img-fluid rounded w-100" src={data.image} alt />
                                                                <div className="destination-overlay p-4">
                                                                    <a href="#" className="btn btn-primary text-white rounded-pill border py-2 px-3">20 Photos</a>
                                                                    <h4 className="text-white mb-2 mt-3">{data.title}</h4>
                                                                    <a href="#" className="btn-hover text-white">View All Place <i className="fa fa-arrow-right ms-2" /></a>
                                                                </div>
                                                                <div className="search-icon">
                                                                    <a href="img/destination-1.jpg" data-lightbox="destination-1"><i className="fa fa-plus-square fa-1x btn btn-light btn-lg-square text-primary" /></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default AdminDestination

