import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./functions/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About/";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate/";
import Partners from "./pages/Partners";
import Project from "./pages/Project";
import Newsletter from "./pages/Newsletter";
import Products from "./pages/Products"
import ProjectDetails from "./pages/Project/projectDetails";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/project" element={<Project />} />
                <Route path="/project/:id" element={<ProjectDetails />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </BrowserRouter>
    );
}
