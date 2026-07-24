import React from 'react'
import Header from '../Common/Header'
import Newsletter from '../Common/Newsletter'
import Footer from '../Common/Footer'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Testimonial() {
    return (
        <div>

            <Helmet>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="lib/lightbox/js/lightbox.min.js"></script>
                <script src="js/main.js"></script>
            </Helmet>
            
            <Header />
            <div>
                {/* Hero Start */}
                <div className="container-fluid bg-breadcrumb">
                    <div className="container text-center py-5" style={{ maxWidth: 900 }}>
                        <h3 className="text-white display-3 mb-4">Our Testimonial</h3>
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item"><NavLink to="/">Home</NavLink></li>
                            <li className="breadcrumb-item"><a href="#">Pages</a></li>
                            <li className="breadcrumb-item active text-white">Testimonial</li>
                        </ol>
                    </div>
                </div>
                {/* Hero End */}
                {/* Testimonial Start */}
                <div className="container-fluid testimonial py-5">
                    <div className="container py-5">
                        <div className="mx-auto text-center mb-5" style={{ maxWidth: 900 }}>
                            <h5 className="section-title px-3">Testimonial</h5>
                            <h1 className="mb-0">Our Clients Say!!!</h1>
                        </div>
                        <div className="testimonial-carousel owl-carousel">
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-1.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-2.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-3.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item text-center rounded pb-4">
                                <div className="testimonial-comment bg-light rounded p-4">
                                    <p className="text-center mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis nostrum cupiditate, eligendi repellendus saepe illum earum architecto dicta quisquam quasi porro officiis. Vero reiciendis,
                                    </p>
                                </div>
                                <div className="testimonial-img p-1">
                                    <img src="img/testimonial-4.jpg" className="img-fluid rounded-circle" alt="Image" />
                                </div>
                                <div style={{ marginTop: '-35px' }}>
                                    <h5 className="mb-0">John Abraham</h5>
                                    <p className="mb-0">New York, USA</p>
                                    <div className="d-flex justify-content-center">
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                        <i className="fas fa-star text-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>

            <Newsletter />
            <Footer />
        </div>
    )
}

export default Testimonial