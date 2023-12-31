import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Layout from "./Layout.jsx"
import {About} from "./Components/About/About.jsx"
import Projects from './Components/Projects/Projects.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

     <Route path="about" element={<About/>} />
     <Route path="projects" element={<Projects/>} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
