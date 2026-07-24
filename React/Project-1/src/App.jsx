import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Packages from "./Pages/Packages"
import Blog from "./Pages/Blog"
import Destination from "./Pages/Destination"
import TourCategory from "./Pages/TourCategory"
import TravelBooking from "./Pages/TravelBooking"
import OurGallery from "./Pages/OurGallery"
import TravelGuides from "./Pages/TravelGuides"
import Testimonial from "./Pages/Testimonial"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import AdminDash from "./Admin/AdminPages/AdminDash"
import AdminBlog from "./Admin/AdminPages/AdminBlog"
import AdminDestination from "./Admin/AdminPages/AdminDestination"
import AdminGallery from "./Admin/AdminPages/AdminGallery"
import AdminGuide from "./Admin/AdminPages/AdminGuide"
import AdminSevices from "./Admin/AdminPages/AdminSevices"      
import AdminTour from "./Admin/AdminPages/AdminTour"
import AdminContact from "./Admin/AdminPages/AdminContact"
import AdminBooking from "./Admin/AdminPages/AdminBooking"
import AdminTestimonial from "./Admin/AdminPages/AdminTestimonial"
import AdminAbout from "./Admin/AdminPages/AdminAbout"
import AdminPackages from "./Admin/AdminPages/AdminPackages" 
import AdminTourAdd from "./Admin/AdminPages/AdminTourAdd"
import Register from "./Pages/Register"
import Login from "./Pages/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/packages" element={<Packages/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/destination" element={<Destination/>} />
        <Route path="/tour" element={<TourCategory/>} />
        <Route path="/booking" element={<TravelBooking/>} /> 
        <Route path="/gallery" element={<OurGallery/>} />
        <Route path="/guides" element={<TravelGuides/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/register" element={<Register/>} />
         <Route path="/login" element={<Login/>} />
         


        {/* Private Route */} 
        <Route path="/dash" element={<AdminDash/>} /> 
        <Route path="/adminabout" element={<AdminAbout/>} />
        <Route path="/adminservice" element={<AdminSevices/>} />
        <Route path="/adminpackages" element={<AdminPackages/>} />
        <Route path="/adminblog" element={<AdminBlog/>} />
        <Route path="/admindestination" element={<AdminDestination/>} />
        <Route path="/admintour" element={<AdminTour/>} /> 
        <Route path="/adminbooking" element={<AdminBooking/>} />
        <Route path="/admingallery" element={<AdminGallery/>} />
        <Route path="/adminguide" element={<AdminGuide/>} />
        <Route path="/admintestimonial" element={<AdminTestimonial/>} />
        <Route path="/admincontact" element={<AdminContact/>} />
        <Route path="/addtour" element={<AdminTourAdd/>} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
