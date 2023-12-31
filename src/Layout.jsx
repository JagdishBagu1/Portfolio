import React  from "react";
import Navbar from "./Components/NavBar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx"
import { Outlet } from "react-router";
import Home from "./Components/Home/Home.jsx";
 function Layout(){
    return (
        <>
        <Navbar/>
        <Home />
        <Outlet/>
        <Footer/>
        </>
    )}

    export default  Layout