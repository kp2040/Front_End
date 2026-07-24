import React, { useEffect, useState } from 'react'
import AdminHeader from '../AdminCommon/AdminHeader'
import AdminHero from '../AdminCommon/AdminHero'
import axios from 'axios'

function AdminGallery() {

    const [gallery, setgallery] = useState([])

    useEffect(() => {
        GalleryFetchData()
    }, [])

    const GalleryFetchData = async () => {
        const res = await axios.get("http://localhost:3000/gallery")
        console.log(res.data)
        setgallery(res.data)
    }

    return (
        <div>
            <AdminHeader />
            <AdminHero title="Admin Gallery" name="Gallery" />
            <h1 className='text-center my-4'>Admin Gallery</h1>
            <div className="container">
                <div className="row my-4">
                    {
                        gallery && gallery.map((data, index) => {
                            return (
                                <div className="col" key={data.id}>
                                    <div className="card mb-3 h-100">
                                        <img src={data.image} className="card-img-top" alt="" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title fs-2">{data.title}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminGallery