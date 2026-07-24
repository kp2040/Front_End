import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'
import UseCustomApiHook from '../../CustomHooks/UseCustomApiHook'
import UseCustomCard from '../../CustomHooks/UseCustomCard'

function AdminBlog() {

    // const [blog, setblog] = useState([])

    // useEffect(() => {
    //     BlogFetchData()
    // }, [])

    // const BlogFetchData = async () => {
    //     const res = await axios.get("http://localhost:3000/blogs")
    //     console.log(res.data)
    //     setblog(res.data)
    // }

    useEffect(() => {
        FetchApi()
    }, [])

    const {api, FetchApi} = UseCustomApiHook("http://localhost:3000/blogs")

    // const [blogdata, setblogdata] = useState({
    //     id: "",
    //     image: "",
    //     date: "",
    //     post: "",
    //     name: "",                                                            
    //     desc: ""
    // })
    // const singledata = async(id) => {
    //     const res = await axios.get(`http://localhost:3000/blogs/${id}`)
    //     setblogdata(res.data)
    // }
    // console.log(blogdata)

    const {view, ViewCard} = UseCustomCard("http://localhost:3000/blogs")
    console.log(view)

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Admin Blog" name="Manage Blog" />
            <div className="container my-5">
                {/* <h1 className='text-center'>Admin Blog</h1> */}
                <table className="table text-center my-5 table-bordered table-hover">
                    <thead>
                        <tr className='table-dark'>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Post</th>
                            <th scope="col">Date</th>
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
                                        <td>{data.name}</td>
                                        <td>{data.post}</td>
                                        <td>{data.date}</td>
                                        <td><img src={data.image} style={{ width: "100px" }} alt="" /></td>
                                        <td>
                                            {/* <button className='btn btn-success'>View</button> */}
                                            <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#BlogView" onClick={() => ViewCard(data.id)} >View</button>
                                            {/* <button className='btn btn-success' data-bs-toggle="modal" data-bs-target={`#BlogView${data.id}`} >View</button> */}
                                            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                View
                                            </button> */}

                                            {/* Modal */}
                                            <div className="modal fade"  id="BlogView" tabIndex={-1} aria-labelledby="BlogViewLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        {/* <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                                        </div> */}
                                                        <div className="modal-body">
                                                            <div className="row g-4 justify-content-center">
                                                                <div className="col-md-12">
                                                                    <div className="blog-item">
                                                                        <div className="blog-img">
                                                                            <div className="blog-img-inner">
                                                                                <img className="img-fluid w-100 rounded-top" src={view.image} alt="Image" />
                                                                                {/* <div className="blog-icon">
                                                                                    <a href="#" className="my-auto"><i className="fas fa-link fa-2x text-white" /></a>
                                                                                </div> */}
                                                                            </div>
                                                                            <div className="blog-info d-flex align-items-center border border-start-0 border-end-0">
                                                                                <small className="flex-fill text-center border-start border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{view.date}</small>
                                                                                {/* <a href="#" className="btn-hover flex-fill text-center text-white border-end py-2"><i className="fa fa-thumbs-up text-primary me-2" />1.7K</a>
                                                                                <a href="#" className="btn-hover flex-fill text-center text-white py-2"><i className="fa fa-comments text-primary me-2" />1K</a> */}
                                                                            </div>
                                                                        </div>
                                                                        <div className="blog-content border border-top-0 rounded-bottom p-4">
                                                                            <p className="mb-3">Posted By: {view.post} </p>
                                                                            <a href="#" className="h4">{view.name}</a>
                                                                            {/* <p className="my-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos</p> */}
                                                                            <p className="my-3">{view.desc}</p>
                                                                            <a href="#" className="btn btn-primary rounded-pill py-2 px-4">Read More</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                            <button type="button" className="btn btn-primary">Save changes</button>
                                                        </div> */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Modal */}
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

export default AdminBlog