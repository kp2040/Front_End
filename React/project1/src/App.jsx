import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Layout/website/Pages/Home";

import About from "./Layout/website/Pages/About";
import Services from "./Layout/website/Pages/Services";
import Contact from "./Layout/website/Pages/Contact";
import Destination from "./Layout/website/Pages/Destination";
import Gallery from "./Layout/website/Pages/Gallery";
import Guides from "./Layout/website/Pages/Guides";
import Packages from "./Layout/website/Pages/Packages";
import Tour from "./Layout/website/Pages/Tour";
import Testimonial from "./Layout/website/Pages/Testimonial";
import Blogs from "./Layout/website/Pages/Blogs";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Destination" element={<Destination />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Guides" element={<Guides />} />
        <Route path="/Packages" element={<Packages />} />
        <Route path="/Tour" element={<Tour />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Blogs" element={<Blogs />} />


     






      </Routes>
    </BrowserRouter>
  );
}

export default App;